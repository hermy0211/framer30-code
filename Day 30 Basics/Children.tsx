import * as React from "react";
import { PropertyControls, ControlType } from "framer";

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    background: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
};

export class Children extends React.Component<Props> {
    render() {
        return <div style={style}>{this.props.children}</div>;
    }
}
