import * as React from "react";

const parentStyle: React.CSSProperties = {
    height: "125px",
    width: "310px",
    perspective: "1000px"
}

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFFFFF",
    overflow: "hidden",
    borderRadius: "0 0 10px 10px",
    transform: "rotate3d(0, 0, 0, 360deg)",
    transformOrigin: "center top",
    transition: "transform 1s, background 1s",
    boxShadow: "0 6px 10px rgba(0,0,0,0.25)"
}

const cardFront: React.CSSProperties = {
    position: "absolute",
    top: "18px",
    fontSize: "20px",
    color: "#6B6B6B",
    transition: "all 0.3s"
}

const cardFrontTwo: React.CSSProperties = {
    position: "absolute",
    top: "44px",
    fontSize: "16px",
    color: "#B8B8B8",
    transition: "all 0.3s"
}

const cardBack: React.CSSProperties = {
    position: "absolute",
    display: "block",
    width: "260px",
    top: "-10px",
    fontSize: "15px",
    transition: "all 0.3s",
    transform: "rotate3d(1, 0, 0, 180deg)",
    opacity: "0"
}

const partsOfSpeech: React.CSSProperties = {
    position: "absolute",
    fontStyle: "italic",
    color: "#B8B8B8",
    transition: "all 0.3s"
}

export class Card_Bottom extends React.Component {
    render() {
        return (
            <div style={parentStyle}>
                <div style={style} className="bottomCard">
                    <span style={cardFront} className="cardFront">
                        /ˈkount(ə)nəns/
                    </span>
                    <span style={cardFrontTwo} className="cardFront">
                        noun, verb
                    </span>
                    <p style={cardBack} className="cardBack">
                        <span style={partsOfSpeech}>noun</span><br/>
                        1. A person's face or facial expression<br/>
                        2. Approval or favor<br/><br/>
                    </p>
                </div>
            </div>
        )
    }
}
