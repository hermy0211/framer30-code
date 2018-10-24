import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    currentCard: null,
    cardsLeft: Animatable(52)
})

let cardArray = []
let i = 0

export const cardFrame: Override = props => {
    cardArray = props.children
    return {
        left: data.cardsLeft
    }
}

export const leftTouchArea: Override = () => {
    return {
        onTap() {
            if(i<4) {
                i++
                data.currentCard = cardArray[i]
                animate.easeOut(data.cardsLeft, (52-(290*i)), {duration: 0.5})
            } else {
                i=4
            }
        }
    }
}

export const rightTouchArea: Override = () => {
    return {
        onTap() {
            if(i>0) {
                i--
                data.currentCard = cardArray[i]
                animate.easeOut(data.cardsLeft, (52-(290*i)), {duration: 0.5})
            } else {
                i=0
            }
        }
    }
}

export const cardContainer: Override = props => {
    let cardOpacity = Animatable(0.6)
    let cardScale = Animatable(0.9)
    
    if (data.currentCard == null) {
        data.currentCard = cardArray[0]
    }

    if (data.currentCard.props.id == props.id) {
        animate.ease(cardOpacity, 1, {duration: 0.5})
        animate.ease(cardScale, 1, {duration: 1})
    } else {
        animate.ease(cardOpacity, 0.6, {duration: 0.5})
        animate.ease(cardScale, 0.9, {duration: 1})
    }

    return {
        opacity: cardOpacity,
        scale: cardScale
    }
}