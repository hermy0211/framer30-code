import * as React from "react";
import { Data, animate, Override, Animatable } from "framer"

// Set data for opacity
const data = Data({
    opacityOff: Animatable(0),
    opacityOn: Animatable(1)
})

export const pageRotation: Override = () => {
    // Variable to toggle onTap()
    let open = false
    return {
        onTap() {
            let pages = document.querySelectorAll(".page")
            // If the pages are closed, open them
            if (!open) {
                open = true
                // Change opacity for headers and footers
                animate.ease(data.opacityOff, 1, {duration: 0.2})
                animate.ease(data.opacityOn, 0, {duration: 0.2})
                // Rotate each page
                pages.forEach((page) => {
                    if (page.classList.contains("second")) {
                        page.style.transform = "translate(0px, 244px) rotate3d(1, 0, 0, -20deg)"
                    } else if (page.classList.contains("third")) {
                        page.style.transform = "translate(0px, 444px) rotate3d(1, 0, 0, -20deg)"
                    } else {
                        page.style.transform = "translate(0px, 44px) rotate3d(1, 0, 0, -20deg)"
                    }
                })
            }
            // If the pages are open, close them
            else {
                open = false
                // Change opacity for headers and footers
                animate.ease(data.opacityOff, 0, {duration: 0.2})
                animate.ease(data.opacityOn, 1, {duration: 0.2})
                // Rotate each page
                pages.forEach((page) => {
                    page.style.transform = "translate(0px, 0px) rotate3d(0, 0, 0, 0)"
                })
            }
        }
    }
}

export const turnOpacityOff: Override = () => { 
    return {
        opacity: data.opacityOff
    }
}

export const turnOpacityOn: Override = () => { 
    return {
        opacity: data.opacityOn
    }
}