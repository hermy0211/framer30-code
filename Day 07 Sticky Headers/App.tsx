import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    secondBackground: "rgba(0,0,0,0)",
    secondOpacity: "0",
    thirdBackground: "rgba(0,0,0,0)",
    thirdOpacity: "0"
})

export const header: Override = () => {
    return {
        onMouseWheel() {
            let secondHeaderTop = this.children[2].props.top
            let thirdHeaderTop = this.children[3].props.top
            if(secondHeaderTop > 712) {
                data.secondBackground = "#0053FF"
                data.secondOpacity = "1"
            } else {
                data.secondBackground = "rgba(0,0,0,0)"
                data.secondOpacity = "0"
            }
            if(thirdHeaderTop > 1424) {
                data.thirdBackground = "#0053FF"
                data.thirdOpacity = "1"
            } else {
                data.thirdBackground = "rgba(0,0,0,0)"
                data.thirdOpacity = "0"
            }
        }
    }
}

export const secondBefore: Override = () => {
    return {
        background: data.secondBackground
    }
}

export const secondAfter: Override = () => {
    return {
        opacity: data.secondOpacity
    }
}

export const thirdBefore: Override = () => {
    return {
        background: data.thirdBackground
    }
}

export const thirdAfter: Override = () => {
    return {
        opacity: data.thirdOpacity
    }
}