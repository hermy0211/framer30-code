import * as React from "react";
import "./Background.css";

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

export class Background extends React.Component {
    componentDidMount() {
        let dotWrappers: NodeListOf<HTMLElement> = document.querySelectorAll(".dotWrapper")
        let dots: NodeListOf<HTMLElement> = document.querySelectorAll(".dot")
        dotWrappers.forEach((dotWrapper)=>{
            let randomTop = getRandomInt(1,100)
            let randomLeft = getRandomInt(1,100)
            let randomOne = getRandomInt(1,50)+20
            let randomTwo = getRandomInt(1,100)/(-10)
            dotWrapper.style.top = `${randomTop}%`
			dotWrapper.style.left = `${randomLeft}%`
			dotWrapper.style.animation = `flying ${randomOne}s ease-in-out ${randomTwo}s infinite alternate" `
        })
        dots.forEach((dot)=>{
            let randomThree = getRandomInt(1,30)-15
            let randomFour = getRandomInt(1,30)-15
            let randomFive = getRandomInt(1,20)+10
            let randomSix = getRandomInt(1,100)/(-10)
            dot.style.transformOrigin = `${randomThree}px ${randomFour}px`
			dot.style.animation = `rotating ${randomFive}s ease-in-out ${randomSix}s infinite`
        })
    }

    createDots = () => {
        let dots = []
        for (let i=0; i<120; i++) {
            dots.push(
                <div className={`dotWrapper`}>
                    <div className={`dot`}></div>
                </div>
            )
        }
        return dots
    }

    render() {
        return (
            <div className="bg">
                {this.createDots()}
            </div>)
        }
}
