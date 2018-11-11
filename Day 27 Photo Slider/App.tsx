import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    hue: 0,
    brightness: 100,
    contrast: 100,
    hueLeft: Animatable(96),
    hueBottom: Animatable(94),
    hueOpacity: Animatable(1),
    brightnessLeft: Animatable(173),
    brightnessBottom: Animatable(94),
    brightnessOpacity: Animatable(1),
    contrastLeft: Animatable(251),
    contrastBottom: Animatable(94),
    contrastOpacity: Animatable(1),
    closeDisplay: "none",
    hueSliderDisplay: "none",
    brightnessSliderDisplay: "none",
    contrastSliderDisplay: "none"
})

export const photo: Override = () => {
    return {
        hueRotate: data.hue,
        brightness: data.brightness,
        contrast: data.contrast
    }
}

export const hueIcon: Override = () => {
    return {
        left: data.hueLeft,
        bottom: data.hueBottom,
        opacity: data.hueOpacity,
        onTap() {
            data.closeDisplay = "initial"
            animate.ease(data.hueLeft, 63, {duration: 0.4})
            animate.ease(data.brightnessBottom, 75, {duration: 0.4})
            animate.ease(data.brightnessOpacity, 0, {duration: 0.2})
            animate.ease(data.contrastBottom, 75, {duration: 0.4})
            animate.ease(data.contrastOpacity, 0, {duration: 0.2})

            setTimeout(()=>{
                data.hueSliderDisplay = "initial"
            },200)
        }
    }
}

export const brightnessIcon: Override = () => {
    return {
        left: data.brightnessLeft,
        bottom: data.brightnessBottom,
        opacity: data.brightnessOpacity,
        onTap() {
            data.closeDisplay = "initial"
            animate.ease(data.brightnessLeft, 63, {duration: 0.4})
            animate.ease(data.hueBottom, 75, {duration: 0.4})
            animate.ease(data.hueOpacity, 0, {duration: 0.2})
            animate.ease(data.contrastBottom, 75, {duration: 0.4})
            animate.ease(data.contrastOpacity, 0, {duration: 0.2})

            setTimeout(()=>{
                data.brightnessSliderDisplay = "initial"
            },200)
        }
    }
}

export const contrastIcon: Override = () => {
    return {
        left: data.contrastLeft,
        bottom: data.contrastBottom,
        opacity: data.contrastOpacity,
        onTap() {
            data.closeDisplay = "initial"
            animate.ease(data.contrastLeft, 63, {duration: 0.4})
            animate.ease(data.hueBottom, 75, {duration: 0.4})
            animate.ease(data.hueOpacity, 0, {duration: 0.2})
            animate.ease(data.brightnessBottom, 75, {duration: 0.4})
            animate.ease(data.brightnessOpacity, 0, {duration: 0.2})

            setTimeout(()=>{
                data.contrastSliderDisplay = "initial"
            },200)
        }
    }
}

export const closeButton: Override = () => {
    return {
        style: {display: data.closeDisplay},
        onTap() {
            data.closeDisplay = "none"
            data.hueSliderDisplay = "none"
            data.brightnessSliderDisplay = "none"
            data.contrastSliderDisplay = "none"
            animate.ease(data.hueLeft, 96, {duration: 0.4})
            animate.ease(data.hueBottom, 94, {duration: 0.4})
            setTimeout(()=>{
                animate.ease(data.hueOpacity, 1, {duration: 0.2})
            },200)
            
            animate.ease(data.brightnessLeft, 173, {duration: 0.4})
            animate.ease(data.brightnessBottom, 94, {duration: 0.4})
            setTimeout(()=>{
                animate.ease(data.brightnessOpacity, 1, {duration: 0.2})
            },200)

            animate.ease(data.contrastLeft, 251, {duration: 0.4})
            animate.ease(data.contrastBottom, 94, {duration: 0.4})
            setTimeout(()=>{
                animate.ease(data.contrastOpacity, 1, {duration: 0.2})
            },200)
        }
    }
}

export const hueSlider: Override = () => {
    return {
        style: {display: data.hueSliderDisplay},
        onValueChange(value: number) {
            data.hue = value
        }
    }
}

export const brightnessSlider: Override = () => {
    return {
        style: {display: data.brightnessSliderDisplay},
        onValueChange(value: number) {
            data.brightness = value
        }
    }
}

export const contrastSlider: Override = () => {
    return {
        style: {display: data.contrastSliderDisplay},
        onValueChange(value: number) {
            data.brightness = value
        }
    }
}