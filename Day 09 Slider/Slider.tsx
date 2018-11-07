import * as React from "react";
import { Frame, Point, Draggable, PropertyControls, ControlType } from "framer";

// This code is a replica of Benjamin den Boer's Slider component

export interface Props {
  value: number;
  onValueChange: (value: number) => void;
  knob: string;
  track: string;
  tint: string;
  width: number;
  height: number;
  min: number;
  max: number;
  knobSize: number;
  shadow: number;
  trackHeight: number;
  left: number;
  constrained: boolean;
}

interface State {
  value: number;
  propsValue: number;
  knobOffset: number;
}

const modulate = (value, r1, r2) => {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
};

export class Slider extends React.Component<Partial<Props>, State> {
  static defaultProps = {
    width: 120,
    height: 44,
    value: 50,
    knob: "white",
    track: "#DDD",
    tint: "#09F",
    min: 0,
    max: 100,
    knobSize: 30,
    shadow: "rgba(0,0,0,0.1)",
    trackHeight: 2,
    constrained: false,
  };

  static propertyControls: PropertyControls<Props> = {
    tint: { type: ControlType.Color, title: "Tint" },
    track: { type: ControlType.Color, title: "Track" },
    shadow: { type: ControlType.Color, title: "Shadow" },
    min: { type: ControlType.Number, title: "Min", min: 0 },
    max: { type: ControlType.Number, title: "Max", min: 0, max: 360 },
    value: { type: ControlType.Number, title: "Value", min: 0, max: 360 },
    knobSize: { type: ControlType.Number, title: "Knob", min: 20, max: 50 },
    trackHeight: {
      type: ControlType.Number,
      title: "Height",
      min: 1,
      max: 10,
    },
    constrained: { type: ControlType.Boolean, title: "Constrain" },
  };

  state = {
    value: Slider.defaultProps.value,
    propsValue: Slider.defaultProps.value,
    knobOffset: 0,
  };

  componentDidMount() {
    const { value, onValueChange } = this.props;
    this.setState({ value });

    if (onValueChange) {
      onValueChange(value);
    }
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return {
      propsValue: props.value,
      value: props.value !== state.propsValue ? props.value : state.value,
    };
  }

  onMove = (event: Point) => {
    const { onValueChange } = this.props;
    const value = this.pointToValue(event.x);
    this.setState({ value });

    if (onValueChange) {
      onValueChange(value);
    }
  };

  onClick = event => {
    const { knobSize, onValueChange, max, min } = this.props;
    let value = this.pointToValue(event.point.x - knobSize / 2);
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.setState({ value });
    if (onValueChange) {
      onValueChange(value);
    }
  };

  valueToPoint = value => {
    const { min, max, width, constrained, knobSize } = this.props;
    if (constrained) {
      return modulate(value, [min, max], [0, width - knobSize]);
    } else {
      return modulate(value, [min, max], [-knobSize / 2, width - knobSize / 2]);
    }
  };

  pointToValue = point => {
    const { min, max, width, constrained, knobSize } = this.props;
    if (constrained) {
      return modulate(point, [0, width - knobSize], [min, max]);
    } else {
      return modulate(point, [-knobSize / 2, width - knobSize / 2], [min, max]);
    }
  };

  render() {
    const {
      knob,
      track,
      tint,
      width,
      height,
      knobSize,
      trackHeight,
      constrained,
      min,
      max,
    } = this.props;

    let left = this.valueToPoint(max);
    let ratio = (left + knobSize / 2) / width;

    if (this.state.value < max) {
      left = this.valueToPoint(this.state.value);
      ratio = (left + knobSize / 2) / width;
    }
    if (min > this.state.value) {
      ratio = this.valueToPoint(min) / width;
      left = this.valueToPoint(min);
    }

    if (min === max && max < this.state.value) {
      ratio = 1;
      if (constrained) {
        left = width - knobSize;
      } else {
        left = width - knobSize / 2;
      }
    }

    if (
      (min === max && max > this.state.value) ||
      (min === max && min === this.state.value)
    ) {
      ratio = 0;
      if (constrained) {
        left = 0;
      } else {
        left = -knobSize / 2;
      }
    }

    const constraintsX = constrained ? 0 : -knobSize / 2;
    const constraintsWidth = constrained ? width : width + knobSize;

    if (ratio > 1) {
      ratio = 1;
    } else if (ratio < 0) {
      ratio = 0;
    }

    const constraints = {
      x: constraintsX,
      y: height / 2 - knobSize / 2,
      width: constraintsWidth,
      height: knobSize,
    };

    return (
      <>
        <Frame
          left={0}
          clip={true}
          height={trackHeight}
          width={width}
          top={(height - trackHeight) / 2}
          background={track}
          radius={50}
          onClick={this.onClick}
          overflow={"hidden"}
        >
          <Frame
            width={`${ratio * 100}%`}
            top={0}
            left={0}
            bottom={0}
            background={tint}
            radius={50}
          />
        </Frame>
        <Draggable
          width={knobSize}
          height={knobSize}
          constraints={constraints}
          bounce={false}
          overdrag={false}
          onMove={this.onMove}
          horizontal={true}
          vertical={false}
          left={left}
          top={height / 2 - this.props.knobSize / 2}
          background={knob}
          radius={"50%"}
          shadows={[
            {
              inset: false,
              color: `${this.props.shadow}`,
              x: 0,
              y: 1,
              blur: 2,
              spread: 0,
            },
            {
              inset: false,
              color: `${this.props.shadow}`,
              x: 0,
              y: 2,
              blur: 4,
              spread: 0,
            },
            {
              inset: false,
              color: `${this.props.shadow}`,
              x: 0,
              y: 4,
              blur: 8,
              spread: 0,
            },
          ]}
        />
      </>
    );
  }
}
