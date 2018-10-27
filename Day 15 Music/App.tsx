import { Data, animate, Override, Animatable } from "framer"
import { Shadow } from "framer/types/src/render";

const data = Data({
    playerBgOpacity: Animatable(1),
    playerTop: Animatable(671),
    playerBottom: Animatable(75),
    playerRadius: Animatable(0),
    handleOpacity: Animatable(0),
    controlsOpacity: Animatable(0),
    albumTop: Animatable(13),
    albumLeft: Animatable(30),
    albumRight: Animatable(305),
    albumShadowOpacity: Animatable(0),
    titleBeforeOpacity: Animatable(1),
    titleAfterOpacity: Animatable(0),
    appBgOpacity: Animatable(0)
})

let open = false

function openPlayer() {
    open = true
    animate.ease(data.playerBgOpacity, 1, {duration: 0.2})
    animate.ease(data.playerTop, 57, {duration: 0.5})
    animate.ease(data.playerBottom, 0, {duration: 0.5})
    animate.ease(data.playerRadius, 20, {duration: 0.5})
    animate.ease(data.albumTop, 87, {duration: 0.5})
    animate.ease(data.albumLeft, 62, {duration: 0.5})
    animate.ease(data.albumRight, 62, {duration: 0.5})
    animate.ease(data.albumShadowOpacity, 1, {duration: 0.5})
    animate.ease(data.titleBeforeOpacity, 0, {duration: 0.1})
    animate.ease(data.appBgOpacity, 1, {duration: 0.5})
    setTimeout(()=>{
        animate.ease(data.handleOpacity, 1, {duration: 0.4})
        animate.ease(data.controlsOpacity, 1, {duration: 0.4})
    }, 200)
}

function closePlayer() {
    open = false
    animate.ease(data.playerTop, 671, {duration: 0.5})
    animate.ease(data.playerBottom, 75, {duration: 0.5})
    animate.ease(data.playerRadius, 0, {duration: 0.5})
    animate.ease(data.albumTop, 13, {duration: 0.5})
    animate.ease(data.albumLeft, 30, {duration: 0.5})
    animate.ease(data.albumRight, 305, {duration: 0.5})
    animate.ease(data.albumShadowOpacity, 0, {duration: 0.5})
    animate.ease(data.appBgOpacity, 0, {duration: 0.5})
    animate.ease(data.handleOpacity, 0, {duration: 0.4})
    animate.ease(data.controlsOpacity, 0, {duration: 0.4})
    setTimeout(()=>{
        animate.ease(data.titleBeforeOpacity, 1, {duration: 0.2})
    }, 300)
}

export const player: Override = () => {
    return {
        top: data.playerTop,
        bottom: data.playerBottom,
        radius: {topLeft: data.playerRadius, topRight: data.playerRadius},
        onTapStart() {
            if(!open) {
                animate.ease(data.playerBgOpacity, 0, {duration: 0.2})
            }
        },
        onTapEnd() {
            if(!open) {
                openPlayer()
            } else {
                closePlayer()
            }
        }
    }
}

export const playerBg: Override = () => {
    return {
        opacity: data.playerBgOpacity,
        radius: {topLeft: data.playerRadius, topRight: data.playerRadius}
    }
}

export const handle: Override = () => {
    return {
        opacity: data.handleOpacity
    }
}

export const controls: Override = () => {
    return {
        opacity: data.controlsOpacity
    }
}

export const album: Override = () => {
    return {
        top: data.albumTop,
        left: data.albumLeft,
        right: data.albumRight
    }
}

export const albumShadow: Override = () => {
    return {
        opacity: data.albumShadowOpacity
    }
}

export const beforeTitle: Override = () => {
    return {
        opacity: data.titleBeforeOpacity
    }
}

export const appBg: Override = () => {
    return {
        opacity: data.appBgOpacity
    }
}
