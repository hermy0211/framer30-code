import * as React from "react";
import { Draggable, Animatable, animate } from "framer"
import Card from "./Card";
import Info from "./Info";

class DraggableCard extends React.Component<Props> {
    lastPoint = null
    defaultAnimation = null

    state = {
        top: Animatable(0)
    }

    moveHandler = (point) => {
        this.lastPoint = point
    }

    dragStartHandler = () => {
        let infoBoxes: NodeListOf<HTMLElement> = document.querySelectorAll(".info")
        infoBoxes.forEach((info)=>{
            info.style.display="none"
        })
    }

    dragEndHandler = async () => {
        let infoBoxes: NodeListOf<HTMLElement> = document.querySelectorAll(".info")
        if (this.lastPoint.y > 80) {
            this.cancelDefaultAnimation()
            await animate.easeOut(this.state.top, 640, {duration: 0.4}).finished
            infoBoxes.forEach((info)=>{
                info.style.display="initial"
            })
        }
        else {
            setTimeout(()=>{
                infoBoxes.forEach((info)=>{
                    info.style.display="initial"
                })
            }, 300)
        }
    }

    dragAnimationHandler = (animation) => {
        this.defaultAnimation = animation
    }

    cancelDefaultAnimation = () => {
        this.defaultAnimation.x.cancel()
        this.defaultAnimation.y.cancel()
    }
    
    render() {
    return (
        <div>
            <Draggable
                width={this.props.width}
                height={this.props.height}
                horizontal={false}
                top={this.state.top}
                onDragDidMove={this.dragStartHandler}
                onDragEnd={this.dragEndHandler}
                onDragAnimationStart={this.dragAnimationHandler}
                onMove={this.moveHandler}
                style={{
                    background: "transparent"
                }}
            >
                <Card
                    backgroundColor={this.props.backgroundColor}
                    scale={this.props.scale}
                />
                <Info
                    category={this.props.category}
                    place={this.props.place}
                    info={this.props.info}
                />
            </Draggable>
        </div>
    )
  }
}

export default DraggableCard