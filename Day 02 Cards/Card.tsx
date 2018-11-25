import * as React from "react";

class Card extends React.Component<Props> {
    render() {
        let color = this.props.backgroundColor;
        let scale = this.props.scale;
        return (
            <div style={{
                height: "382px",
                width: "270px",
                position: "absolute",
                top: "0px",
                borderRadius: "12px",
                backgroundColor: color,
                scale: scale
            }}/>
        )
    }
}

export default Card