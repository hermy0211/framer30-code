import { Data, animate, Override, Animatable, Point } from "framer"

const data = Data({
    circleScale: Animatable(0),

    // Values for the left menu
    leftMenuOpacity: Animatable(0),
    leftMenuLeft: "0",
    leftMenuTop: "0",
    leftTopCircle: Animatable(50),
    leftCenterCircleTop: Animatable(50),
    leftCenterCircleRight: Animatable(50),
    leftRightCircle: Animatable(50),

    // Values for the center menu
    centerMenuOpacity: Animatable(0),
    centerMenuLeft: "0",
    centerMenuTop: "0",
    centerLeftCircleTop: Animatable(39),
    centerLeftCircleLeft: Animatable(25),
    centerCenterCircle: Animatable(39),
    centerRightCircleTop: Animatable(39),
    centerRightCircleRight: Animatable(26),

    // Values for the right menu
    rightMenuOpacity: Animatable(0),
    rightMenuLeft: "0",
    rightMenuTop: "0",
    rightLeftCircle: Animatable(50),
    rightCenterCircleTop: Animatable(50),
    rightCenterCircleLeft: Animatable(50),
    rightTopCircle: Animatable(50),
})

function leftMenuStartTap() {
    animate.ease(data.leftMenuOpacity, 1, {duration: 0.2})
    animate.ease(data.circleScale, 1, {duration: 0.2})
    animate.ease(data.leftTopCircle, -21, {duration: 0.5})
    animate.ease(data.leftCenterCircleTop, -6, {duration: 0.5})
    animate.ease(data.leftCenterCircleRight, -6, {duration: 0.5})
    animate.ease(data.leftRightCircle, -21, {duration: 0.5})
}

function leftMenuFinishTap() {
    animate.ease(data.leftTopCircle, 50, {duration: 0.5})
    animate.ease(data.leftCenterCircleTop, 50, {duration: 0.5})
    animate.ease(data.leftCenterCircleRight, 50, {duration: 0.5})
    animate.ease(data.leftRightCircle, 50, {duration: 0.5})
    setTimeout(() => {
        animate.ease(data.leftMenuOpacity, 0, {duration: 0.2})
        animate.ease(data.circleScale, 0, {duration: 0.3})
    }, 200)
}

function centerMenuStartTap() {
    animate.ease(data.centerMenuOpacity, 1, {duration: 0.2})
    animate.ease(data.circleScale, 1, {duration: 0.2})
    animate.ease(data.centerLeftCircleTop, 0, {duration: 0.5})
    animate.ease(data.centerLeftCircleLeft, -25, {duration: 0.5})
    animate.ease(data.centerCenterCircle, -29, {duration: 0.5})
    animate.ease(data.centerRightCircleTop, 0, {duration: 0.5})
    animate.ease(data.centerRightCircleRight, -25, {duration: 0.5})
}

function centerMenuFinishTap() {
    animate.ease(data.centerLeftCircleTop, 39, {duration: 0.5})
    animate.ease(data.centerLeftCircleLeft, 25, {duration: 0.5})
    animate.ease(data.centerCenterCircle, 39, {duration: 0.5})
    animate.ease(data.centerRightCircleTop, 39, {duration: 0.5})
    animate.ease(data.centerRightCircleRight, 26, {duration: 0.5})
    setTimeout(() => {
        animate.ease(data.centerMenuOpacity, 0, {duration: 0.2})
        animate.ease(data.circleScale, 0, {duration: 0.3})
    }, 200)
}

function rightMenuStartTap() {
    animate.ease(data.rightMenuOpacity, 1, {duration: 0.2})
    animate.ease(data.circleScale, 1, {duration: 0.2})
    animate.ease(data.rightLeftCircle, -21, {duration: 0.5})
    animate.ease(data.rightCenterCircleTop, -6, {duration: 0.5})
    animate.ease(data.rightCenterCircleLeft, -6, {duration: 0.5})
    animate.ease(data.rightTopCircle, -21, {duration: 0.5})
}

function rightMenuFinishTap() {
    animate.ease(data.rightLeftCircle, 50, {duration: 0.5})
    animate.ease(data.rightCenterCircleTop, 50, {duration: 0.5})
    animate.ease(data.rightCenterCircleLeft, 50, {duration: 0.5})
    animate.ease(data.rightTopCircle, 50, {duration: 0.5})
    setTimeout(() => {
        animate.ease(data.rightMenuOpacity, 0, {duration: 0.2})
        animate.ease(data.circleScale, 0, {duration: 0.3})
    }, 200)
}

export const showMenu: Override = () => {
    return {
        onTapStart(event: Point) {
            // Get the x, y coordinates of the mouse event
            const positionX = event.point.x
            const positionY = event.point.y

            // If the user taps the left of the screen
            if (positionX>=0 && positionX<125) {
                data.leftMenuLeft = positionX
                data.leftMenuTop = positionY-80
                leftMenuStartTap()
            }
            // If the user taps the center of the screen
            else if (positionX>=125 && positionX<250) {
                data.centerMenuLeft = positionX-50
                data.centerMenuTop = positionY-65
                centerMenuStartTap()
            }
            // If the user taps the right of the screen
            else {
                data.rightMenuLeft = positionX-80
                data.rightMenuTop = positionY-80
                rightMenuStartTap()
            }
        },
        onTapEnd() {
            leftMenuFinishTap()
            centerMenuFinishTap()
            rightMenuFinishTap()
        }
    }
}

// Assign overrides for the left menu
export const leftMenu: Override = () => {
    return {
        opacity: data.leftMenuOpacity,
        left: data.leftMenuLeft,
        top: data.leftMenuTop
    }
}

export const leftMenuTop: Override = () => {
    return {
        top: data.leftTopCircle,
        scale: data.circleScale
    }
}

export const leftMenuCenter: Override = () => {
    return {
        top: data.leftCenterCircleTop,
        right: data.leftCenterCircleRight,
        scale: data.circleScale
    }
}

export const leftMenuRight: Override = () => {
    return {
        right: data.leftRightCircle,
        scale: data.circleScale
    }
}

// Assign overrides for the center menu
export const centerMenu: Override = () => {
    return {
        opacity: data.centerMenuOpacity,
        left: data.centerMenuLeft,
        top: data.centerMenuTop
    }
}

export const centerMenuLeft: Override = () => {
    return {
        top: data.centerLeftCircleTop,
        left: data.centerLeftCircleLeft,
        scale: data.circleScale
    }
}

export const centerMenuCenter: Override = () => {
    return {
        top: data.centerCenterCircle,
        scale: data.circleScale
    }
}

export const centerMenuRight: Override = () => {
    return {
        top: data.centerRightCircleTop,
        right: data.centerRightCircleRight,
        scale: data.circleScale
    }
}

// Assign overrides for the right menu
export const rightMenu: Override = () => {
    return {
        opacity: data.rightMenuOpacity,
        left: data.rightMenuLeft,
        top: data.rightMenuTop
    }
}

export const rightMenuTop: Override = () => {
    return {
        top: data.rightTopCircle,
        scale: data.circleScale
    }
}

export const rightMenuCenter: Override = () => {
    return {
        top: data.rightCenterCircleTop,
        left: data.rightCenterCircleLeft,
        scale: data.circleScale
    }
}

export const rightMenuLeft: Override = () => {
    return {
        left: data.rightLeftCircle,
        scale: data.circleScale
    }
}