import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    frameTop: Animatable(0)
})

let clicks = 1

export const cardFrame: Override = props => {
    return {
        top: data.frameTop,
        onTap() {
            setTimeout(()=>{
                animate.ease(data.frameTop, -120*clicks, {duration: 0.4})
                clicks++
            }, 400)
        }
    }
}