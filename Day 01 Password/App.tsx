import * as React from "react";
import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    frameTop: Animatable(274),
    keyboardBottom: Animatable(-292),
    stringColor: "0.33",
    password: "Password",
    stringOpacity:  Animatable(1),
    errorOpacity: Animatable(0),
    successOpacity: Animatable(0),
    left: Animatable(-258),
    successLeft: Animatable(-1032),
    errorLeft: Animatable(-1032),
    successFrameScale: Animatable(1.1),
    errorFrameScale: Animatable(1.1),
    successButtonScale: Animatable(1.2),
    successSubmitButtonOpacity: Animatable(1)
})

// Show keyboard when the password field is pressed

export const tapPasswordField: Override = props => {
    return {
        opacity: data.stringColor,
        onTap() {
            animate.ease(data.left, 0, {duration: 0.6})
            animate.ease(data.frameTop, 150, {duration: 0.5})
            animate.ease(data.keyboardBottom, 0, {duration: 0.5})
            data.password = " "
            data.stringColor = "1"
        }
    }
}

// Hide keyboard when background is pressed

export const tapBackground: Override = () => {
    return {
        onTap() {
            animate.ease(data.left, -258, {duration: 0.6})
            animate.ease(data.frameTop, 274, {duration: 0.5})
            animate.ease(data.keyboardBottom, -292, {duration: 0.5})
            animate.ease(data.successLeft, -1032, {duration: 0})
            animate.ease(data.errorLeft, -1032, {duration: 0})
            animate.ease(data.stringOpacity, 1, {duration: 0.5})
            animate.ease(data.successOpacity, 0, {duration: 0.2})
            animate.ease(data.errorOpacity, 0, {duration: 0.2})
            data.stringColor = "0.33"
            data.password = "Password"
            animate.spring(data.successFrameScale, 1, {duration: 0.1})
            animate.spring(data.errorFrameScale, 1, {duration: 0.1})
            animate.ease(data.successSubmitButtonOpacity, 1, {duration: 0.5})
            animate.spring(data.successButtonScale, 1.2, {duration: 0.1})
        }
    }
}

export const passwordBar: Override = () => {
    return {
        left: data.left
    }
}

export const passwordMessage: Override = () => {
    return {
        opacity: data.stringOpacity
    }
}

export const passwordString: Override = props => {
    return {
        text: data.password
    }
}

export const passwordPosition: Override = () => {
    return {
        top: data.frameTop
    }
}

export const keyboardPosition: Override = () => {
    return {
        bottom: data.keyboardBottom
    }
}

// Update password field when a key is pressed

export const tapKey: Override = props => {
    return {
        onTap() {
            let newPassword = data.password
            newPassword += "• "
            data.password = newPassword
        }
    }
}

// Check if password is 8 characters, and return result

export const checkPassword: Override = () => {
    return {
        onTap() {
            if (data.password.length == 17) {
                animate.ease(data.successLeft, 0, {duration: 2})
                setTimeout(() => {
                    animate.ease(data.stringOpacity, 0, {duration: 0.2})
                    animate.ease(data.successSubmitButtonOpacity, 0, {duration: 0.2})
                    animate.ease(data.successOpacity, 1, {duration: 1.1})
                    animate.spring(data.successFrameScale, 1)
                    animate.spring(data.successButtonScale, 1)
                }, 900)
            } else {
                animate.ease(data.errorLeft, 0, {duration: 2})
                setTimeout(() => {
                    animate.ease(data.stringOpacity, 0, {duration: 0.2})
                    animate.ease(data.errorOpacity, 1, {duration: 1.1})
                    animate.spring(data.errorFrameScale, 1)
                }, 900)
            }
        }
    }
}

export const successBar: Override = () => {
    return {
        left: data.successLeft
    }
}

export const successMessage: Override = () => {
    return {
        opacity: data.successOpacity
    }
}

export const successAnimation: Override = () => {
    return {
        opacity: data.successOpacity
    }
}

export const successButton: Override = () => {
    return {
        scale: data.successButtonScale,
        opacity: data.successOpacity
    }
}

export const successSubmitButton: Override = () => {
    return {
        opacity: data.successSubmitButtonOpacity
    }
}

export const errorBar: Override = () => {
    return {
        left: data.errorLeft
    }
}

export const errorMessage: Override = () => {
    return {
        opacity: data.errorOpacity
    }
}

export const errorAnimation: Override = () => {
    return {
        opacity: data.errorOpacity,
        scale: data.errorFrameScale
    }
}