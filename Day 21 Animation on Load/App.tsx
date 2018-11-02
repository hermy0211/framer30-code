import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    firstBgWidth: Animatable(0),
    secondBgWidth: Animatable(0),
    textOpacity: Animatable(0)
})

export const Article: Override = async () => {
    animate.easeIn(data.firstBgWidth, 263, {duration: 1})
    await animate.easeIn(data.secondBgWidth, 198, {duration: 1}).finished
    animate.ease(data.textOpacity, 1, {duration: 0.4})
}

export const firstBg: Override = () => {
    return {
        width: data.firstBgWidth
    }
}

export const secondBg: Override = () => {
    return {
        width: data.secondBgWidth
    }
}

export const Text: Override = () => {
    return {
        opacity: data.textOpacity
    }
}