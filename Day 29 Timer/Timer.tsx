import * as React from "react"
import { Frame, PropertyControls, ControlType } from "framer"

interface State {
    hour: number,
    minutes: number,
    seconds: number,
    time: string,
    timerStarted: boolean
}

export class Timer extends React.Component<State> {
    timer: number

    state = {
        hour: 0,
        minutes: 0,
        seconds: 0,
        time: "00:00:00",
        timerStarted: false
    }

    updateTime = () => {
        this.timer = window.setInterval(() => {
            this.runTimer()
        }, 1000)
    }

    stopTime = () => {
        window.clearInterval(this.timer)
    }

    resetTime = () => {
        let button = document.querySelector(".start-stop-button") as HTMLElement

        if (this.state.timerStarted) {
            window.clearInterval(this.timer)
        }

        this.setState((state)=>{return {hour: 0, minutes: 0, seconds: 0, time: "00:00:00", timerStarted: false}})
        button.innerText = "START"
    }

    runTimer = () => {
        this.setState((state)=>{return {seconds: state.seconds+1}})

        if (this.state.seconds >= 60) {
            this.setState((state)=>{return {minutes: Math.floor(state.seconds / 60)}})
        }

        if (this.state.minutes >= 60) {
            this.setState((state)=>{return {hour: Math.floor(state.minutes / 60)}})
        }

        if (this.state.hour > 99) {
            this.setState(()=>{return {hour:99, minutes:99, seconds:99}})
        }

        let shownHour = ("0" + this.state.hour).slice(-2)
        let shownMinutes = ("0" + (this.state.minutes - this.state.hour * 60)).slice(-2)
        let shownSeconds = ("0" + (this.state.seconds - this.state.minutes * 60)).slice(-2)
        let time = shownHour + ":" + shownMinutes + ":" + shownSeconds

        this.setState(()=>{return {time: time.toString()}})
    }

    startTimer = () => {
        let button = document.querySelector(".start-stop-button") as HTMLElement
        
        if (!this.state.timerStarted) {
            this.setState({timerStarted: true})
            button.innerText = "STOP"
            this.updateTime()
        } else {
            this.setState({timerStarted: false})
            button.innerText = "START"
            this.stopTime()
        }
    }

    render() {
        return (
            <Frame top={0} left={0} right={0} height={44} background={null}>
                <div
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                        fontSize: "56px",
                        letterSpacing: "0",
                        width: "260px",
                        fontWeight: "bold",
                        background: "transparent",
                        color: "#FFF",
                    }}
                >{this.state.time}</div>
                <div style={{display: "flex", width: "260px", justifyContent: "center"}}>
                    <div
                        style={{
                            marginTop: "30px",
                            marginLeft: "40px",
                            marginRight: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            width: "75px",
                            height: "75px",
                            borderRadius: "50%",
                            color: "#0053FF",
                            background: "#FFFFFF",
                            paddingTop: "27px",
                            fontWeight: "bold",
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
                        }}
                        onClick={this.startTimer}
                        className="start-stop-button"
                    >START</div>
                    <div
                        style={{
                            marginTop: "30px",
                            marginLeft: "10px",
                            marginRight: "40px",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            width: "75px",
                            height: "75px",
                            borderRadius: "50%",
                            color: "#0053FF",
                            background: "#FFFFFF",
                            paddingTop: "27px",
                            fontWeight: "bold",
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
                        }}
                        onClick={this.resetTime}
                    >RESET</div>
                </div>
            </Frame>
        )
    }
}