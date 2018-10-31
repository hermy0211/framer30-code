import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    textArray: [],
    textInput: ""
})

export const tapKey: Override = props => {
    return {
        onTap() {
            let currentLetter = props.children[0].props.text
            data.textArray.push(currentLetter)
            data.textInput = data.textArray.join('')
        }
    }
}

export const tapSpace: Override = props => {
    return {
        onTap() {
            let currentLetter = " "
            data.textArray.push(currentLetter)
            data.textInput = data.textArray.join('')
        }
    }
}

export const textField: Override = props => {
    return {
        text: data.textInput
    }
}