import { Data, animate, Override, Animatable } from "framer"

const data = Data({ 
    video: ["On", "Off", "Off", "Off", "Off"],
    poster: [Animatable(0), Animatable(1), Animatable(1), Animatable(1), Animatable(1)]
 })

export const Pages: Override = () => {
    return {
        onChangePage(event) {
            data.poster.forEach((poster)=>{
                animate.ease(poster, 1, {duration: 1})
            })
            animate.ease(data.poster[event], 0, {duration: 1})

            data.video = ["Off", "Off", "Off", "Off", "Off"]
            data.video[event] = "On"
        }
    }
}

export const VideoOne: Override = () => {
    return {
        play: data.video[0]
    }
}

export const VideoTwo: Override = () => {
    return {
        play: data.video[1]
    }
}

export const VideoThree: Override = () => {
    return {
        play: data.video[2]
    }
}

export const VideoFour: Override = () => {
    return {
        play: data.video[3]
    }
}

export const VideoFive: Override = () => {
    return {
        play: data.video[4]
    }
}

export const PosterOne: Override = () => {
    return {
        opacity: data.poster[0]
    }
}

export const PosterTwo: Override = () => {
    return {
        opacity: data.poster[1]
    }
}

export const PosterThree: Override = () => {
    return {
        opacity: data.poster[2]
    }
}

export const PosterFour: Override = () => {
    return {
        opacity: data.poster[3]
    }
}

export const PosterFive: Override = () => {
    return {
        opacity: data.poster[4]
    }
}