import * as React from "react"
import { Frame, Scroll } from "framer"

interface Props {
    value: string
    placeholder: string
    onValueChange: (value: string) => void
}

interface State {
    value: string
    externalValue: string
}

export class InputField extends React.Component<Partial<Props>, State> {
    static defaultProps = {
        value: "",
        placeholder: "Type something...",
    }

    state = {
        value: InputField.defaultProps.value,
        externalValue: InputField.defaultProps.value,
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        const { value } = nextProps
        const { externalValue } = prevState
        if (value !== externalValue) {
            return { value, externalValue: value }
        }
        return null
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.nativeEvent.target as HTMLInputElement
        const value = element.value
        this.setState({ ...this.state, value })
        if (this.props.onValueChange) this.props.onValueChange(value)
    }

    clickButton = () => {
        this.setState({value: InputField.defaultProps.value})

        let message = (document.getElementById("input") as HTMLInputElement).value
        let messageBox = (document.getElementById("messagebox") as HTMLElement)
        let newMessage = document.createElement("div")

        if (message) {
            messageBox.style.transform = "translate(0px, -9434px)"

            newMessage.innerHTML = message
            newMessage.style.backgroundColor = "#0053FF"
            newMessage.style.color = "white"
            newMessage.style.padding = "10px 16px 10px 16px"
            newMessage.style.borderRadius = "14px"
            newMessage.style.marginTop = "6px"
            newMessage.style.maxWidth = "325px"
            newMessage.style.wordWrap = "break-word"

            messageBox.appendChild(newMessage)
        } else {
            return
        }
    }

    render() {
        const { placeholder } = this.props
        const { value } = this.state
        return (
            <div>
                <Frame
                    width={375}
                    height={566}
                    overflow="hidden"
                    background="rgba(0,0,0,0)"
                >
                    <Scroll
                        width={375}
                        height={566}
                        contentHeight={566}
                        direction={"vertical"}
                    >
                        <div
                            style={{ ...boxstyle }}
                            id="messagebox"
                        >
                            <div style={{marginTop: "auto"}}></div>
                        </div>
                    </Scroll>
                </Frame>
                <div
                    style={{ ...inputboxstyle }}
                >
                    <input
                        id="input"
                        onChange={this.onChange}
                        value={value}
                        placeholder={placeholder}
                        style={{ ...inputstyle }}
                    />
                    <div
                        onClick={this.clickButton}
                        style={{ ...buttonstyle }}
                    >
                        SEND
                    </div>
                </div>
            </div>
        )
    }
}

const boxstyle: React.CSSProperties = {
    background: "white",
    display: "flex",
    width: "100%",
    height: 10000,
    color: "black",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
    padding: 25,
    fontSize: "18px",
    paddingBottom: 15
}

const inputboxstyle: React.CSSProperties = {
    borderTop: "1px solid #DDDDDD",
    borderBottom: "1px solid #DDDDDD",
    borderLeft: "none",
    borderRight: "none",
    position: "absolute",
    top: "566px",
    width: "100%",
    height: "60px"
}

const inputstyle: React.CSSProperties = {
    border: "none",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 25,
    paddingRight: 25,
    width: "80%",
    fontSize: "16px"
}

const buttonstyle: React.CSSProperties = {
    border: "none",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,
    float: "right",
    width: "20%",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0053FF",
    backgroundColor: "white",
    letterSpacing: 1.4
}