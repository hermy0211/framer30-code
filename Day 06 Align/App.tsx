import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    leftOne: Animatable(234),
    leftTwo: Animatable(234),
    leftThree: Animatable(234),
    titleLeftOne: Animatable(38),
    titleLeftTwo: Animatable(38)
})

const springOptionsOne = {
    tension: 500,
    friction: 20
}

const springOptionsTwo = {
    tension: 400,
    friction: 20
}

const springOptionsThree = {
    tension: 600,
    friction: 20
}

const springOptionsFour = {
    tension: 300,
    friction: 20
}

export const alignLeft: Override = () => {
    return {
        onTap() {
            animate.spring(data.leftOne, 234, springOptionsTwo)
            animate.spring(data.leftTwo, 234, springOptionsThree)
            animate.spring(data.leftThree, 234, springOptionsFour)
            animate.spring(data.titleLeftOne, 38, springOptionsOne)
            animate.spring(data.titleLeftTwo, 38, springOptionsOne)
        }
    }
}

export const alignCenter: Override = () => {
    return {
        onTap() {
            animate.spring(data.leftOne, 271, springOptionsTwo)
            animate.spring(data.leftTwo, 274, springOptionsThree)
            animate.spring(data.leftThree, 271, springOptionsFour)
            animate.spring(data.titleLeftOne, 91, springOptionsOne)
            animate.spring(data.titleLeftTwo, 70, springOptionsOne)
        }
    }
}

export const alignRight: Override = () => {
    return {
        onTap() {
            animate.spring(data.leftOne, 309, springOptionsTwo)
            animate.spring(data.leftTwo, 315, springOptionsThree)
            animate.spring(data.leftThree, 309, springOptionsFour)
            animate.spring(data.titleLeftOne, 144, springOptionsOne)
            animate.spring(data.titleLeftTwo, 103, springOptionsOne)
        }
    }
}

export const iconOne: Override = () => {
    return {
        left: data.leftOne
    }
}

export const iconTwo: Override = () => {
    return {
        left: data.leftTwo
    }
}

export const iconThree: Override = () => {
    return {
        left: data.leftThree
    }
}

export const titleOne: Override = () => {
    return {
        left: data.titleLeftOne
    }
}

export const titleTwo: Override = () => {
    return {
        left: data.titleLeftTwo
    }
}