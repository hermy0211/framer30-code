import * as React from "react";
import { PropertyControls, ControlType } from "framer";

const style: React.CSSProperties = {
    position: "fixed",
    width: "375px",
    height: "101px"
}

export class Drag extends React.Component {
    componentDidMount = () => {
        let path = document.getElementById("box")

        // Config
        var spring = .9;
        var friction = .1;
        var easing = .1;

        // Values
        var sy = 200;
        var dy = 100;
        var vy = 0;
        var released = true;

        window.requestAnimationFrame(function update() {
            window.requestAnimationFrame(update)
        
            if (released) {
                vy += (dy - sy) * spring
                sy += (vy *= friction)
            } else {
                sy += (dy - sy) * easing
            }
            
            path.setAttribute('d', 'M0,0 H100 V200 Q50,' + sy + ' 0,200')
        })

        setInterval(()=>{
            if (released) {
                released = false
                dy = 0
            } else {
                released = true
                dy = 100
            }
        },1000)
    }

    render() {
        return (
            <svg viewBox="0 0 100 200" id="svg" preserveAspectRatio="none" style={style}>
                <path id="box" d="M0,0 H100 V200 Q50,100 0,200" fill="#F2F2F2"/>
            </svg>
        )
    }
}
