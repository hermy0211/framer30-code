import * as React from "react";
import { PropertyControls, ControlType, Draggable } from "framer";

const style: React.CSSProperties = {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
}

export class Drag extends React.Component {
    render() {
        return (
            <Draggable
                style={style}
                bounce={false}
            >
                <div>{this.props.children}</div>
            </Draggable>
        )
    }
}
