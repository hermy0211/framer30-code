import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    ageNumber: "30"
})

export const Slider: Override = () => {
    return {
        onValueChange: (value: number) => {
            let roundedValue = Math.floor(value)
            data.ageNumber = roundedValue.toString()
        }
    }
}

export const Age: Override = props => {
    return {
        text: data.ageNumber
    }
}