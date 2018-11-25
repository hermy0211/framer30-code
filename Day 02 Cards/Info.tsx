import * as React from "react";

class Info extends React.Component<Props> {
    render() {
        return (
            <div
                style={{
                    height: "180px",
                    width: "270px",
                    position: "absolute",
                    top: "382px",
                    display: "inline-block",
                    textAlign: "center",
                    background: "#FFF"
                }}
                className="info"
            >
                <p
                    style={{
                        margin: "31px 0 0 0",
                        color: "#0053FF",
                        letterSpacing: "2.8px",
                        fontWeight: "bold"
                    }}
                >{this.props.category}</p>
                <p
                    style={{
                        margin: "12px 0 0 0",
                        color: "#000",
                        fontWeight: "800",
                        fontSize: "26px"
                    }}
                >{this.props.place}</p>
                <p
                    style={{
                        margin: "12px auto 0 auto",
                        color: "#000",
                        fontSize: "14px",
                        width: "240px"
                    }}
                >{this.props.info}</p>
            </div>
        )
    }
}

export default Info