import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    storyTop: Animatable(60),
    storyLeft: Animatable(28),
    storyWidth: Animatable(65),
    storyHeight: Animatable(65),
    storyRadius: Animatable(1000),
    storyScale: Animatable(1),
    storyOverflow: "hidden",
    storyOpacity: Animatable(0),
    bgOpacity: Animatable(0),
    storyBgOpacity: Animatable(1),
    dragDisplay: "none",
    iconDisplay: "initial"
})

export const StoryFrame: Override = () => {
    return {
        height: data.storyHeight,
        width: data.storyWidth,
        radius: data.storyRadius,
        overflow: data.storyOverflow,
        scale: data.storyScale
    }
}

export const Drag: Override = () => {
    return {
        top: data.storyTop,
        left: data.storyLeft,
        style: {display: data.dragDisplay},
        onTapStart() {
            animate.ease(data.storyScale, 0.9, {duration: 0.2})
        },
        onTapEnd: async() => {
            data.storyOverflow = "hidden"
            animate.ease(data.storyRadius, 1000, {duration: 0.1})
            await animate.ease(data.storyHeight, 375, {duration: 0}).finished
            animate.ease(data.bgOpacity, 0, {duration: 0.2})
            animate.ease(data.storyOpacity, 0, {duration: 0.3})
            animate.ease(data.storyBgOpacity, 1, {duration: 0.1})
            animate.ease(data.storyScale, 1, {duration: 0.2})
            animate.ease(data.storyHeight, 65, {duration: 0.2})
            animate.ease(data.storyWidth, 65, {duration: 0.2})
            animate.ease(data.storyTop, 60, {duration: 0.2})
            await animate.ease(data.storyLeft, 28, {duration: 0.2}).finished
            data.iconDisplay = "initial"
            data.dragDisplay = "none"
        }
    }
}

export const BackgroundLayer: Override = () => {
    return {
        opacity: data.bgOpacity
    }
}

export const StoryFG: Override = () => {
    return {
        opacity: data.storyOpacity
    }
}

export const StoryBG: Override = () => {
    return {
        opacity: data.storyBgOpacity
    }
}

export const StoryIcon: Override = () => {
    return {
        style: {display: data.iconDisplay},
        onTapStart() {
            data.iconDisplay = "none"
            data.dragDisplay = "initial"
            animate.ease(data.storyScale, 0.9, {duration: 0.2})
        },
        onTapEnd: async() => {
            await animate.ease(data.storyRadius, 0, {duration: 0.1}).finished
            animate.ease(data.storyScale, 1, {duration: 0.1})
            animate.ease(data.storyBgOpacity, 0, {duration: 0.1})
            animate.ease(data.storyOpacity, 1, {duration: 0.3})
            animate.ease(data.storyWidth, 375, {duration: 0.1})
            animate.ease(data.storyHeight, 812, {duration: 0.2})
            animate.ease(data.storyLeft, 0, {duration: 0.1})
            await animate.ease(data.storyTop, 0, {duration: 0.1}).finished
            data.storyOverflow = "visible"
            animate.ease(data.bgOpacity, 0.8, {duration: 0.2})
        }
    }
}