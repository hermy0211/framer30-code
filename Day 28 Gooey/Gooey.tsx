import * as React from "react"
import "./Gooey.css"

let menuOpen = false

export class Gooey extends React.Component {
    mousePress = () => {
        let buttons: NodeListOf<HTMLElement> = document.querySelectorAll(".button")
        let mainButton = document.querySelector(".main-button") as HTMLElement

        if (!menuOpen) {
            buttons.forEach((button) => {
                button.style.transform = "scale(0.9)"
            })
        } else {
            mainButton.style.transform = "scale(0.9)"
        }
    }

    mousePressRelease = () => {
        let buttons: NodeListOf<HTMLElement> = document.querySelectorAll(".button")
        let subButtons: NodeListOf<HTMLElement> = document.querySelectorAll(".sub-button")
        let mainButton = document.querySelector(".main-button") as HTMLElement

        if (!menuOpen) {
            buttons.forEach((button) => {
                button.style.transform = "scale(1)"
            })
            subButtons.forEach((button, index) => {
                button.style.transform = `translateY(-${((index+1)*100)}px)`
            })
            menuOpen = true
        } else {
            mainButton.style.transform = "scale(0.9)"
            subButtons.forEach((button, index) => {
                button.style.transform = `translateY(0px)`
            })
            menuOpen = false
        }
    }

    render() {
        return (
            <div className="background">
                <div className="sub-button button"/>
                <div className="sub-button button"/>
                <div
                    className="main-button button"
                    onMouseDown={this.mousePress}
                    onMouseUp={this.mousePressRelease}
                />
            </div>
        )
    }
}
