import { Data, animate, Override, Animatable } from "framer"

// This prototype was built upon Jay Stakelon's tab navigation tutorial
// Check it out here : https://www.youtube.com/watch?v=9dqVixckEh8

const data = Data({
    currentTab: null,
    containerLeft: Animatable(0),
    lineLeft: Animatable(0)
})

let tabArray = []

export const tabFrame: Override = props => {
    tabArray = props.children
}

export const tabButton: Override = props => {
    let tabOpacity = 0.3

    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    
    return {
        opacity: tabOpacity
        
        onTap() {
            data.currentTab = props.id

            let i = tabArray.findIndex((tab) => {
                return data.currentTab === tab.props.id
            })

            animate.easeOut(data.containerLeft, -375*i, {duration: 0.25})
            animate.easeOut(data.lineLeft, 94*i, {duration: 0.25})
        }
    }
}

export const backgroundLayer: Override = () => {
    return {
        left: data.containerLeft
    }
}

export const menuLine: Override = () => {
    return {
        left: data.lineLeft
    }
}