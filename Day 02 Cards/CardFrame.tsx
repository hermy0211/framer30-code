import * as React from "react";
import { Draggable, Animatable, animate } from "framer"
import DraggableCard from "./DraggableCard"

export class CardFrame extends React.Component<Props> {
  render() {
    return (
      <div>
        <DraggableCard
          category="LANDMARKS"
          place="Statue of Liberty"
          info="The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in NYC."
          backgroundColor="#002775"
        ></DraggableCard>
        <DraggableCard
          category="NATIONAL PARKS"
          place="Grand Canyon"
          info="Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon."
          backgroundColor="#003399"
        ></DraggableCard>
        <DraggableCard
          category="BEACHES"
          place="La Jolla Beach"
          info="La Jolla is a seaside area in San Diego, known for its rugged coastline."
          backgroundColor="#0042C7"
        ></DraggableCard>
        <DraggableCard
          category="MOUNTAINS"
          place="Rocky Mountains"
          info="The Rocky Mountains stretch some 3,000 miles from British Columbia, Canada down to New Mexico, USA."
          backgroundColor="#0053FF"
        ></DraggableCard>
      </div>
    )
  }
}