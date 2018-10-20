import * as React from "react"

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
    background: "#F5F5F5",
    overflow: "hidden",
    borderRadius: "10px 10px 0 0",
    transform: "rotate3d(0, 0, 0, 360deg)",
    transformOrigin: "center bottom",
    transition: "transform 0.5s, background 0.5s"
}

const cardFront: React.CSSProperties = {
    position: "absolute",
    top: "72px",
    fontSize: "34px",
    fontWeight: "bold",
    letterSpacing: "2.2px",
    transition: "all 0.3s"
}

const cardBack: React.CSSProperties = {
    position: "absolute",
    display: "block",
    width: "260px",
    top: "40px",
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

export class Card_Top extends React.Component {
    render() {
        return (
            <div style={parentStyle}>
                <div style={style} className="topCard">
                    <span style={cardFront} className="cardFront">
                        Countenance
                    </span>
                    <p style={cardBack} className="cardBack">
                        <span style={partsOfSpeech}>verb</span><br/>
                        1. Admit as acceptable or possible<br/>
                        2. To permit or tolerate
                    </p>
                </div>
            </div>
        )
    }
}
