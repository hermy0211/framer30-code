import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    checkedOpacity: [Animatable(0),Animatable(0),Animatable(0),Animatable(0),Animatable(0)],
    checkedScale: [Animatable(0.8),Animatable(0.8),Animatable(0.8),Animatable(0.8),Animatable(0.8)],
    checkScale: [Animatable(1),Animatable(1),Animatable(1),Animatable(1),Animatable(1)],
    transparentLayerOpacity: [Animatable(0),Animatable(0),Animatable(0),Animatable(0),Animatable(0)],
    crossLeft: [Animatable(-207),Animatable(-233),Animatable(-202),Animatable(-156),Animatable(-251)]
})

let checked = [false,false,false,false,false]

export const CheckButtonOne: Override = () => {
    return {
        scale: data.checkScale[0],
        onTapStart() {
            animate.ease(data.checkScale[0], 0.8, {duration: 0.3})
        }
        onTapEnd() {
            if (!checked[0]) {
                checked[0] = true
                animate.ease(data.checkScale[0], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[0], 1, {duration: 0.3})
                animate.ease(data.checkedScale[0], 1, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[0], 0.77, {duration: 0.3})
                animate.ease(data.crossLeft[0], 0, {duration: 0.5})
            } else {
                checked[0] = false
                animate.ease(data.checkScale[0], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[0], 0, {duration: 0.3})
                animate.ease(data.checkedScale[0], 0.8, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[0], 0, {duration: 0.3})
                animate.ease(data.crossLeft[0], -207, {duration: 0.3})
            }
        }
    }
}

export const CheckedButtonOne: Override = () => {
    return {
        opacity: data.checkedOpacity[0],
        scale: data.checkedScale[0]
    }
}

export const transparentLayerOne: Override = () => {
    return {
        opacity: data.transparentLayerOpacity[0],
    }
}

export const crossLeftOne: Override = () => {
    return {
        left: data.crossLeft[0],
    }
}

export const CheckButtonTwo: Override = () => {
    return {
        scale: data.checkScale[1],
        onTapStart() {
            animate.ease(data.checkScale[1], 0.8, {duration: 0.3})
        }
        onTapEnd() {
            if (!checked[1]) {
                checked[1] = true
                animate.ease(data.checkScale[1], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[1], 1, {duration: 0.3})
                animate.ease(data.checkedScale[1], 1, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[1], 0.77, {duration: 0.3})
                animate.ease(data.crossLeft[1], 0, {duration: 0.5})
            } else {
                checked[1] = false
                animate.ease(data.checkScale[1], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[1], 0, {duration: 0.3})
                animate.ease(data.checkedScale[1], 0.8, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[1], 0, {duration: 0.3})
                animate.ease(data.crossLeft[1], -233, {duration: 0.3})
            }
        }
    }
}

export const CheckedButtonTwo: Override = () => {
    return {
        opacity: data.checkedOpacity[1],
        scale: data.checkedScale[1]
    }
}

export const transparentLayerTwo: Override = () => {
    return {
        opacity: data.transparentLayerOpacity[1],
    }
}

export const crossLeftTwo: Override = () => {
    return {
        left: data.crossLeft[1],
    }
}

export const CheckButtonThree: Override = () => {
    return {
        scale: data.checkScale[2],
        onTapStart() {
            animate.ease(data.checkScale[2], 0.8, {duration: 0.3})
        }
        onTapEnd() {
            if (!checked[2]) {
                checked[2] = true
                animate.ease(data.checkScale[2], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[2], 1, {duration: 0.3})
                animate.ease(data.checkedScale[2], 1, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[2], 0.77, {duration: 0.3})
                animate.ease(data.crossLeft[2], 0, {duration: 0.5})
            } else {
                checked[2] = false
                animate.ease(data.checkScale[2], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[2], 0, {duration: 0.3})
                animate.ease(data.checkedScale[2], 0.8, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[2], 0, {duration: 0.3})
                animate.ease(data.crossLeft[2], -202, {duration: 0.3})
            }
        }
    }
}

export const CheckedButtonThree: Override = () => {
    return {
        opacity: data.checkedOpacity[2],
        scale: data.checkedScale[2]
    }
}

export const transparentLayerThree: Override = () => {
    return {
        opacity: data.transparentLayerOpacity[2],
    }
}

export const crossLeftThree: Override = () => {
    return {
        left: data.crossLeft[2],
    }
}

export const CheckButtonFour: Override = () => {
    return {
        scale: data.checkScale[3],
        onTapStart() {
            animate.ease(data.checkScale[3], 0.8, {duration: 0.3})
        }
        onTapEnd() {
            if (!checked[3]) {
                checked[3] = true
                animate.ease(data.checkScale[3], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[3], 1, {duration: 0.3})
                animate.ease(data.checkedScale[3], 1, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[3], 0.77, {duration: 0.3})
                animate.ease(data.crossLeft[3], 0, {duration: 0.5})
            } else {
                checked[3] = false
                animate.ease(data.checkScale[3], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[3], 0, {duration: 0.3})
                animate.ease(data.checkedScale[3], 0.8, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[3], 0, {duration: 0.3})
                animate.ease(data.crossLeft[3], -156, {duration: 0.3})
            }
        }
    }
}

export const CheckedButtonFour: Override = () => {
    return {
        opacity: data.checkedOpacity[3],
        scale: data.checkedScale[3]
    }
}

export const transparentLayerFour: Override = () => {
    return {
        opacity: data.transparentLayerOpacity[3],
    }
}

export const crossLeftFour: Override = () => {
    return {
        left: data.crossLeft[3],
    }
}

export const CheckButtonFive: Override = () => {
    return {
        scale: data.checkScale[4],
        onTapStart() {
            animate.ease(data.checkScale[4], 0.8, {duration: 0.3})
        }
        onTapEnd() {
            if (!checked[4]) {
                checked[4] = true
                animate.ease(data.checkScale[4], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[4], 1, {duration: 0.3})
                animate.ease(data.checkedScale[4], 1, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[4], 0.77, {duration: 0.3})
                animate.ease(data.crossLeft[4], 0, {duration: 0.5})
            } else {
                checked[4] = false
                animate.ease(data.checkScale[4], 1, {duration: 0.3})
                animate.ease(data.checkedOpacity[4], 0, {duration: 0.3})
                animate.ease(data.checkedScale[4], 0.8, {duration: 0.3})
                animate.ease(data.transparentLayerOpacity[4], 0, {duration: 0.3})
                animate.ease(data.crossLeft[4], -251, {duration: 0.3})
            }
        }
    }
}

export const CheckedButtonFive: Override = () => {
    return {
        opacity: data.checkedOpacity[4],
        scale: data.checkedScale[4]
    }
}

export const transparentLayerFive: Override = () => {
    return {
        opacity: data.transparentLayerOpacity[4],
    }
}

export const crossLeftFive: Override = () => {
    return {
        left: data.crossLeft[4],
    }
}