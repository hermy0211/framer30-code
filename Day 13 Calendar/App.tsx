import { Data, animate, Override, Animatable, Rect } from "framer"

const data = Data({
    calendarHeight: Animatable(335),
    tallBoolean: false,
    opacityBefore: Animatable(0),
    opacityAfter: Animatable(1)
})

export const Calendar: Override = () => {
    return {
        height: data.calendarHeight
    }
}

export const eventsBefore: Override = () => {
    return {
        opacity: data.opacityBefore
    }
}

export const eventsAfter: Override = () => {
    return {
        opacity: data.opacityAfter
    }
}

export const BottomSheet: Override = () => {
    let tallBoolean = data.tallBoolean
    return {
        onPanStart() {
            if (!tallBoolean) {
                tallBoolean = true
                animate.ease(data.calendarHeight, 241, {duration: 0.4})
                animate.ease(data.opacityAfter, 0, {duration: 0})
                animate.ease(data.opacityBefore, 1, {duration: 0.4})
            } else {
                tallBoolean = false
                animate.ease(data.calendarHeight, 335, {duration: 0.4})
                animate.ease(data.opacityBefore, 0, {duration: 0})
                animate.ease(data.opacityAfter, 1, {duration: 0.4})
            }
        }
    }
}