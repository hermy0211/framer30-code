import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    cardBottom: Animatable(310),
    secondCardBottom: Animatable(310),
    secondCardOpacity: Animatable(0),
    secondCardScale: Animatable(1),
    thirdCardBottom: Animatable(310),
    thirdCardOpacity: Animatable(0),
    thirdCardScale: Animatable(1),
    fourthCardBottom: Animatable(310),
    fourthCardOpacity: Animatable(0),
    fourthCardScale: Animatable(1),
    infoBottom: Animatable(161),
    infoOpacity: Animatable(1),
    secondInfoBottom: Animatable(145),
    secondInfoOpacity: Animatable(0),
    thirdInfoBottom: Animatable(145),
    thirdInfoOpacity: Animatable(0),
    fourthInfoBottom: Animatable(145),
    fourthInfoOpacity: Animatable(0),
    dragOpacity: Animatable(1),
    archiveText: "1 ARCHIVED",
    archiveBottom: Animatable(66),
    archiveOpacity: Animatable(0)
})

export const firstCard: Override = () => {
    return {
        bottom: data.cardBottom,
        onTap() {
            animate.ease(data.cardBottom, -332, {duration: 1.5})
            animate.ease(data.infoBottom, 145, {duration: 0.3})
            animate.ease(data.infoOpacity, 0, {duration: 0.3})
            animate.ease(data.dragOpacity, 0, {duration: 0.3})
            setTimeout(() => {
                animate.ease(data.secondCardOpacity, 1, {duration: 0.5})
                animate.ease(data.secondInfoBottom, 161, {duration: 0.5})
                animate.ease(data.secondInfoOpacity, 1, {duration: 0.5})
                setTimeout(()=>{
                    animate.ease(data.archiveOpacity, 1, {duration: 0.5})
                }, 200)
            }, 1000)
        }
    }
}

export const secondCard: Override = () => {
    return {
        bottom: data.secondCardBottom,
        scale: data.secondCardScale,
        opacity: data.secondCardOpacity,
        onTap() {
            animate.ease(data.secondCardBottom, -300, {duration: 1.5})
            animate.ease(data.secondCardScale, 0.9, {duration: 1.5})
            animate.ease(data.secondInfoBottom, 145, {duration: 0.3})
            animate.ease(data.secondInfoOpacity, 0, {duration: 0.3})
            animate.ease(data.archiveOpacity, 0, {duration: 0.3})
            setTimeout(() => {
                animate.ease(data.thirdCardOpacity, 1, {duration: 0.5})
                animate.ease(data.thirdInfoBottom, 161, {duration: 0.5})
                animate.ease(data.thirdInfoOpacity, 1, {duration: 0.5})
                setTimeout(()=>{
                    data.archiveText = "2 ARCHIVED"
                    animate.ease(data.archiveOpacity, 1, {duration: 0.5})
                    animate.ease(data.archiveBottom, 80, {duration: 0})
                }, 200)
            }, 1000)
        }
    }
}

export const thirdCard: Override = () => {
    return {
        bottom: data.thirdCardBottom,
        scale: data.thirdCardScale,
        opacity: data.thirdCardOpacity,
        onTap() {
            animate.ease(data.thirdCardBottom, -270, {duration: 1.5})
            animate.ease(data.thirdCardScale, 0.8, {duration: 1.5})
            animate.ease(data.thirdInfoBottom, 145, {duration: 0.3})
            animate.ease(data.thirdInfoOpacity, 0, {duration: 0.3})
            animate.ease(data.archiveOpacity, 0, {duration: 0.3})
            setTimeout(() => {
                animate.ease(data.fourthCardOpacity, 1, {duration: 0.5})
                animate.ease(data.fourthInfoBottom, 161, {duration: 0.5})
                animate.ease(data.fourthInfoOpacity, 1, {duration: 0.5})
                setTimeout(()=>{
                    data.archiveText = "3 ARCHIVED"
                    animate.ease(data.archiveOpacity, 1, {duration: 0.5})
                    animate.ease(data.archiveBottom, 90, {duration: 0})
                }, 200)
            }, 1000)
        }
    }
}

export const fourthCard: Override = () => {
    return {
        bottom: data.fourthCardBottom,
        scale: data.fourthCardScale,
        opacity: data.fourthCardOpacity
    }
}

export const firstInfo: Override = () => {
    return {
        bottom: data.infoBottom,
        opacity: data.infoOpacity
    }
}

export const secondInfo: Override = () => {
    return {
        bottom: data.secondInfoBottom,
        opacity: data.secondInfoOpacity
    }
}

export const thirdInfo: Override = () => {
    return {
        bottom: data.thirdInfoBottom,
        opacity: data.thirdInfoOpacity
    }
}

export const fourthInfo: Override = () => {
    return {
        bottom: data.fourthInfoBottom,
        opacity: data.fourthInfoOpacity
    }
}

export const dragAnimation: Override = () => {
    return {
        opacity: data.dragOpacity
    }
}

export const archiveBox: Override = () => {
    return {
        bottom: data.archiveBottom,
        opacity: data.archiveOpacity
    }
}

export const archiveCount: Override = props => {
    return {
        text: data.archiveText
    }
}