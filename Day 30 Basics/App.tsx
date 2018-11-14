import { Data, animate, Override, Animatable } from "framer"
import { Curve } from "framer/types/src/animation/Animators/BezierAnimator"

const springOptions = {
    tension: 500,
    friction: 30
}

const bezierCurve = [0.2, 0.8, 0.2, 1] as Curve
const duration = 0.5
const bezierOptions = {
    curve: bezierCurve, duration
}

const data = Data({
    left: Animatable(40),
    right: Animatable(40),
    top: Animatable(168),
    bottom: Animatable(439),
    cardOpen: false,
    opacity: Animatable(0),
    menuOpacity: Animatable(1),
})

export const CardOverride: Override = () => {
    return {
        left: data.left,
        right: data.right,
        top: data.top,
        bottom: data.bottom,
        onTap() {
            data.cardOpen = !data.cardOpen

            if(data.cardOpen) {
                animate.spring(data.left, 20, springOptions)
                animate.spring(data.right, 20, springOptions)
                animate.spring(data.top, 112, springOptions)
                animate.spring(data.bottom, 0, springOptions)
                animate.bezier(data.opacity, 1, bezierOptions)
                animate.bezier(data.menuOpacity, 0, bezierOptions)
            } else {
                animate.spring(data.left, 40, springOptions)
                animate.spring(data.right, 40, springOptions)
                animate.spring(data.top, 168, springOptions)
                animate.spring(data.bottom, 439, springOptions)
                animate.bezier(data.opacity, 0, bezierOptions)
                animate.bezier(data.menuOpacity, 1, bezierOptions)
            }
        },
    }
}

export const BackgroundOverride: Override = () => {
    return {
        opacity: data.opacity
    }
}

export const MenuOverride: Override = () => {
    return {
        opacity: data.menuOpacity
    }
}
