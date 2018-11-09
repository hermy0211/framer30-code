import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    bgOpacity: 0,
    bgHeight: 184,
    gradationTop: 184,
    profileLength: 128,
    profileTop: 110,
    profileLeft: 124,
    nameTop: 260,
    nameLeft: 101,
    jobTop: 289,
    jobLeft: 127,
    coloredOpacity: 1,
    followOpacity: 1,
    followTop: 328
})

export const Scroll: Override = () => {
    return {
        onMove(event) {
            // Get y offset value on scroll
            let y = Math.floor(event.y)

            // Update values based on scroll
            if (y < 0 && y >= -200) {
                data.bgOpacity = Math.abs(y)/200
                data.bgHeight = Math.abs(y)/200*(160-184)+184
                data.gradationTop = Math.abs(y)/200*(160-184)+184
                data.profileLength = Math.abs(y)/200*(84-128)+128
                data.profileTop = Math.abs(y)/200*(56-110)+110
                data.profileLeft = Math.abs(y)/200*(28-124)+124
                data.nameTop = Math.abs(y)/200*(71-260)+260
                data.nameLeft = Math.abs(y)/200*(131-101)+101
                data.jobTop = Math.abs(y)/200*(102-289)+289
                data.jobLeft = Math.abs(y)/200*(132-127)+127
                data.coloredOpacity = 1-Math.abs(y)/200
                data.followOpacity = 1-Math.abs(y)/50
                data.followTop = Math.abs(y)/200*(150-328)+328
            } else if (y < -200) {
                data.bgOpacity = 1
                data.bgHeight = 160
                data.gradationTop = 160
                data.profileLength = 84
                data.profileTop = 56
                data.profileLeft = 28
                data.nameTop = 71
                data.nameLeft = 131
                data.jobTop = 102
                data.jobLeft = 132
                data.coloredOpacity = 0
                data.followOpacity = 0
                data.followTop = 150
            } else {
                data.bgOpacity = 0
                data.bgHeight = 184
                data.gradationTop = 184
                data.profileLength = 128
                data.profileTop = 110
                data.profileLeft = 124
                data.nameTop = 260
                data.nameLeft = 101
                data.jobTop = 289
                data.jobLeft = 127
                data.coloredOpacity = 1
                data.followOpacity = 1
                data.followTop = 328
            }
        }
    }
}

export const BgLayer: Override = () => {
    return {
        height: data.bgHeight,
        opacity: data.bgOpacity
    }
}

export const Background: Override = () => {
    return {
        height: data.bgHeight
    }
}

export const Gradation: Override = () => {
    return {
        top: data.gradationTop
    }
}

export const Profile: Override = () => {
    return {
        height: data.profileLength,
        width: data.profileLength,
        top: data.profileTop,
        left: data.profileLeft
    }
}

export const Name: Override = () => {
    return {
        top: data.nameTop,
        left: data.nameLeft
    }
}

export const Job: Override = () => {
    return {
        top: data.jobTop,
        left: data.jobLeft
    }
}

export const Colored: Override = () => {
    return {
        opacity: data.coloredOpacity
    }
}

export const Follow: Override = () => {
    return {
        opacity: data.followOpacity,
        top: data.followTop
    }
}