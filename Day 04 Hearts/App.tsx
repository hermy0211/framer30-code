import * as React from "react";
import { Data, animate, Override, Animatable } from "framer"
import { FrameProperties } from "framer/types/src/render";

const data = Data({
    heartBottom: [Animatable(84), Animatable(84), Animatable(84), Animatable(84), Animatable(84)],
    heartOpacity: [Animatable(0), Animatable(0), Animatable(0), Animatable(0), Animatable(0)],
    heartScale: [Animatable(0), Animatable(0), Animatable(0), Animatable(0), Animatable(0)],
    heartRotation: [Animatable(0), Animatable(0), Animatable(0), Animatable(0), Animatable(0)],
    heartLeft: [Animatable(320), Animatable(320), Animatable(320), Animatable(320), Animatable(320)],
    heartButtonScale: Animatable(1)
})

const springOptions = {
    tension: 500,
    friction: 14
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function initHeart(i) {
    animate.ease(data.heartBottom[i], 84, {duration: 0})
    animate.ease(data.heartOpacity[i], 0, {duration: 0})
    animate.ease(data.heartScale[i], 0, {duration: 0})
    animate.ease(data.heartRotation[i], 0, {duration: 0})
    animate.ease(data.heartLeft[i], 320, {duration: 0})
}

function goLeft(i, interval) {
    let leftPosition = getRandomInt(300, 320)
    let firstRotation = getRandomInt(-6, 0)
    animate.easeInOut(data.heartLeft[i], leftPosition, {duration: interval})
    animate.easeInOut(data.heartRotation[i], firstRotation, {duration: 1})
}

function goRight(i, interval) {
    let rightPosition = getRandomInt(320, 340)
    let secondRotation = getRandomInt(0, 6)
    animate.easeInOut(data.heartLeft[i], rightPosition, {duration: interval})
    animate.easeInOut(data.heartRotation[i], secondRotation, {duration: 1})
}

function animateHearts() {
    let hearts = document.querySelectorAll(".heart")

    hearts.forEach((heart, i)=>{
        // Initiate values
        initHeart(i)

        // Start at slightly different times
        setTimeout(() => {
            // Animate heart
            animate.easeOut(data.heartOpacity[i], 0.8, {duration: 0.2})
            animate.easeOut(data.heartScale[i], 1, {duration: 0.2})
            animate.easeOut(data.heartBottom[i], 266, {duration: 3})
            setTimeout(() => {
                animate.easeOut(data.heartOpacity[i], 0, {duration: 1})
            }, 2000)

            // Set inital direction of animation
            let randomNumber = getRandomInt(0,2)

            // Start by going left first
            if (randomNumber == 0) {
                goLeft(i, 1)
                setTimeout(() => {
                    goRight(i, 1)
                }, 1000)
                setTimeout(() => {
                    goLeft(i, 1)
                }, 2000)
            }
            // Start by going right first
            else {
                goRight(i, 1)
                setTimeout(() => {
                    goLeft(i, 1)
                }, 1000)
                setTimeout(() => {
                    goRight(i, 1)
                }, 2000)
            }
        }, 400*(i+2))
    })
}

export const heartButton: Override = () => { 
    return {
        scale: data.heartButtonScale,
        
        onTap() {
            // Button push animation
            animate.spring(data.heartButtonScale, 1.2, springOptions)
            setTimeout(()=>{
                animate.spring(data.heartButtonScale, 1, springOptions)
            }, 100)
            
            animateHearts()
        }
    }
}

export const heartOne: Override = () => {
    return {
        bottom: data.heartBottom[1],
        opacity: data.heartOpacity[1],
        scale: data.heartScale[1],
        rotation: data.heartRotation[1],
        left: data.heartLeft[1]
    }
}

export const heartTwo: Override = () => {
    return {
        bottom: data.heartBottom[2],
        opacity: data.heartOpacity[2],
        scale: data.heartScale[2],
        rotation: data.heartRotation[2],
        left: data.heartLeft[2]
    }
}

export const heartThree: Override = () => {
    return {
        bottom: data.heartBottom[3],
        opacity: data.heartOpacity[3],
        scale: data.heartScale[3],
        rotation: data.heartRotation[3],
        left: data.heartLeft[3]
    }
}

export const heartFour: Override = () => {
    return {
        bottom: data.heartBottom[4],
        opacity: data.heartOpacity[4],
        scale: data.heartScale[4],
        rotation: data.heartRotation[4],
        left: data.heartLeft[4]
    }
}

export const heartFive: Override = () => {
    return {
        bottom: data.heartBottom[5],
        opacity: data.heartOpacity[5],
        scale: data.heartScale[5],
        rotation: data.heartRotation[5],
        left: data.heartLeft[5]
    }
}