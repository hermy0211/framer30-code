import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    heartScale: [Animatable(1), Animatable(1), Animatable(1)]
})

const springOptions = {
    tension: 500,
    friction: 14
}

export const heartIcon: Override = () => {
    return {
        scale: data.heartScale[0],
        onTap() {
            animate.spring(data.heartScale[0], 1.2, springOptions)
            setTimeout(()=>{
                animate.spring(data.heartScale[0], 1, springOptions)
            }, 200)
            setTimeout(()=>{
                animate.easeOut(data.cardScale[0], 0, {duration: 0.2})
            }, 600)
        }
    }
}

export const heartIconTwo: Override = () => {
    return {
        scale: data.heartScale[1],
        onTap() {
            animate.spring(data.heartScale[1], 1.2, springOptions)
            setTimeout(()=>{
                animate.spring(data.heartScale[1], 1, springOptions)
            }, 100)
        }
    }
}

export const heartIconThree: Override = () => {
    return {
        scale: data.heartScale[2],
        onTap() {
            animate.spring(data.heartScale[2], 1.2, springOptions)
            setTimeout(()=>{
                animate.spring(data.heartScale[2], 1, springOptions)
            }, 100)
        }
    }
}