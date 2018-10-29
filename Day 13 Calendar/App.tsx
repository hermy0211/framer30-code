import * as React from "react";
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
        onChangePage() {
            if (!tallBoolean) {
                console.log("Not tall")
                tallBoolean = true
                animate.ease(data.calendarHeight, 241, {duration: 0.2})
                animate.ease(data.opacityAfter, 0, {duration: 0})
                animate.ease(data.opacityBefore, 1, {duration: 0.2})
            } else {
                console.log("Tall")
                tallBoolean = false
                animate.ease(data.calendarHeight, 335, {duration: 0.2})
                animate.ease(data.opacityBefore, 0, {duration: 0})
                animate.ease(data.opacityAfter, 1, {duration: 0.2})
            }
        }
    }
}