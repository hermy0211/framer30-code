import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    ageNumber: "30"
})

export const Slider: Override = () => {
    return {
        onTapEnd() {
            let knob = document.getElementById("knob")
            let slider = document.getElementById("slider")
            let knobCenter = (Math.floor(knob.getBoundingClientRect().left) + Math.floor(knob.getBoundingClientRect().right))/2
            let sliderLeft = Math.floor(slider.getBoundingClientRect().left)
            let sliderRight = Math.floor(slider.getBoundingClientRect().right)
            let sliderWidth = sliderRight - sliderLeft

            let convertedAge = Math.floor((knobCenter-sliderLeft)/(sliderWidth/60)+20)
            let finalAge

            if(convertedAge < 20) {
                finalAge = 20
            } else if (convertedAge > 80) {
                finalAge = 80
            } else {
                finalAge = convertedAge
            }

            data.ageNumber = finalAge.toString()
        }
    }
}

export const Age: Override = props => {
    return {
        text: data.ageNumber
    }
}