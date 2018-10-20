import { Data, animate, Override, Animatable } from "framer"

export const rotateCard: Override = () => {
    let flip = false
    return {
        onTap() {
            let topCard = document.querySelector(".topCard")
            let bottomCard = document.querySelector(".bottomCard")
            let words = document.querySelectorAll(".cardFront")
            let definitions = document.querySelectorAll(".cardBack")

            if (!flip) {
                flip = true
                topCard.style.transform = "rotate3d(1, 0, 0, 180deg)"
                bottomCard.style.transform = "rotate3d(1, 0, 0, 180deg)"
                topCard.style.background = "#FFFFFF"
                bottomCard.style.background = "#F5F5F5"
                bottomCard.style.boxShadow = "0 0 0"
                words.forEach((word)=>{
                    word.style.opacity = "0"
                })
                setTimeout(()=>{
                    definitions.forEach((definition)=>{
                        definition.style.opacity = "1"
                    })
                    topCard.style.boxShadow = "0 -6px 10px rgba(0,0,0,0.25)"
                },400)
            }
            
            else {
                flip = false
                topCard.style.transform = "rotate3d(-1, 0, 0, 360deg)"
                bottomCard.style.transform = "rotate3d(-1, 0, 0, 360deg)"
                topCard.style.background = "#F5F5F5"
                bottomCard.style.background = "#FFFFFF"
                topCard.style.boxShadow = "0 0 0"
                definitions.forEach((definition)=>{
                    definition.style.opacity = "0"
                })
                setTimeout(()=>{
                    words.forEach((word)=>{
                        word.style.opacity = "1"
                    })
                    bottomCard.style.boxShadow = "0 6px 10px rgba(0,0,0,0.25)"
                },400)
            }
        }
    }
}