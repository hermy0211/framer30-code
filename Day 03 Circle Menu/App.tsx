import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    buttonScale: Animatable(1),
    backgroundMenuScale: Animatable(1),
    iconRotation: Animatable(20),
    iconOpacity: Animatable(0),
    backgroundScale: Animatable(1),
    iconEachRotation: Animatable(-20),
    heartScale: Animatable(1)
})

const springOptions = {
    tension: 500,
    friction: 14
}

export const circleButton: Override = () => {
    return {
        scale: data.buttonScale,
        onTap() {
            animate.spring(data.buttonScale, 1.4, springOptions)
            animate.ease(data.backgroundMenuScale, 3.6, {duration: 0.3})
            animate.ease(data.backgroundScale, 22, {duration: 0.7})
            setTimeout(()=>{
                animate.ease(data.iconRotation, 0, {duration: 0.5})
                animate.ease(data.iconEachRotation, 0, {duration: 0.5})
                animate.ease(data.iconOpacity, 1, {duration: 0.3})
            }, 100)
        }
    }
}

export const circleBackground: Override = () => {
    return {
        scale: data.backgroundMenuScale
    }
}

export const circleIcons: Override = () => {
    return {
        rotation: data.iconRotation,
        opacity: data.iconOpacity
    }
}

export const background: Override = () => {
    return {
        scale: data.backgroundScale
    }
}

export const iconAnimation: Override = () => {
    return {
        rotation: data.iconEachRotation
    }
}

export const heartIcon: Override = () => {
    return {
        rotation: data.iconEachRotation,
        scale: data.heartScale,
        onTap() {
            animate.spring(data.heartScale, 1.2, springOptions)
            setTimeout(()=>{
                animate.spring(data.heartScale, 1, springOptions)
            }, 100)
            setTimeout(()=>{
                animate.ease(data.iconRotation, -20, {duration: 0.5})
                animate.ease(data.iconEachRotation, 20, {duration: 0.5})
                animate.ease(data.iconOpacity, 0, {duration: 0.3})
                setTimeout(()=>{
                    animate.spring(data.buttonScale, 1, springOptions)
                    animate.ease(data.backgroundMenuScale, 1, {duration: 0.3})
                    animate.ease(data.backgroundScale, 1, {duration: 0.4})
                }, 100)
            }, 300)
            setTimeout(()=>{
                animate.ease(data.iconRotation, 20, {duration: 0})
                animate.ease(data.iconEachRotation, -20, {duration: 0})
            }, 1000)
        }
    }
}