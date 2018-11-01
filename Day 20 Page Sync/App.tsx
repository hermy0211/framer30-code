import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    pageIndex: 0
})

export const Blur: Override = () => {
    return {
        style: {filter: "blur(50px)", background: "rgba(0,0,0,0.4)"}
    }
}

export const Album: Override = () => {
    return {
        onChangePage(event) {
            data.pageIndex = event
        }
    }
}

export const Background: Override = () => {
    return {
        currentPage: data.pageIndex,
        style: {pointerEvents: "none"}
    }
}

export const Info: Override = () => {
    return {
        currentPage: data.pageIndex,
        style: {pointerEvents: "none"}
    }
}