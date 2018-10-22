import * as React from "react"
import { Frame, Point, Draggable, PropertyControls, ControlType } from "framer"

export interface Props {
    value: number
    width: number
    height: number
    background: string
}

export class DragElement extends React.Component<Props> {
    static defaultProps = {
        value: 50,
        background: "white"
    }
    
    static propertyControls: PropertyControls<Props> = {
        background: { type: ControlType.Color, title: "Color" }
    }

    render() {
        const {
            width,
            height,
            background
        } = this.props

        const constraints = {
            x: 0,
            y: 0,
            width: width,
            height: height,
        }

        return (
            <Draggable
                width={width}
                height={height}
                constraints={constraints}
                horizontal={true}
                vertical={false}
                background={background}
                radius={"8px"}
                shadows={[
                    {
                      inset: false,
                      color: `rgba(0,0,0,0.2)`,
                      x: 0,
                      y: 0,
                      blur: 10,
                      spread: 0,
                    }
                ]}
            >
                <div>
                    {this.props.children}
                </div>
            </Draggable>
        )
    }
}
