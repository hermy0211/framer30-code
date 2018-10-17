import * as React from "react";

const parentStyle: React.CSSProperties = {
    height: "812px",
    width: "375px",
    perspective: "600px"
};

const style: React.CSSProperties = {
    height: "100%",
    width: "100%",
    position: "absolute",
    transform: "rotate3d(0, 0, 0, 0)",
    backgroundColor: "white",
    transformOrigin: "center -10%",
    transition: "all 0.5s",
    boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px"
};

export class PageComponent extends React.Component<Props> {
    render() {
        return (
            <div style={parentStyle}>
                <div style={style} className="page">{this.props.children}</div>
                <div style={style} className="page second">{this.props.children}</div>
                <div style={style} className="page third">{this.props.children}</div>
            </div>)
    }
}