import * as React from 'react';
import { Scroll } from 'framer';

// This code was initially created by Ismael Martínez
// I simplified and added comments for better understanding

export class Sticky extends React.Component {
  // Store the current position and the top position of the last sticky element
  state = {
    scrollY: 0,
    lastTop: 0
  }

  // Update the state with the Y coordinates
  updateY = (coordinates) => {
    this.setState({scrollY: -coordinates.y})
  }

  // Function to clone the selected sticky frames
  cloneStickyFrames = (elements = []) =>
    elements.map((element) => {
      const {componentIdentifier} = element.props

      // Select the sticky frames within the frame and apply a seperate scrolling rule
      if (componentIdentifier && componentIdentifier.includes('StickyElement')) {
        // If the current position reaches the top of the element
        if (this.state.scrollY > element.props.top) {
          // If the current element reaches the last sticky element
          if (this.state.lastTop < element.props.top) {
            // Set lastTop to the current top of the element
            this.setState({lastTop: element.props.top})
          }

          // If the current position is lower than lastTop, or the top of the element is lower than lastTop
          if (this.state.scrollY < this.state.lastTop || element.props.top >= this.state.lastTop) {
            // If the top of the element is higher than lastTop
            if (element.props.top < this.state.lastTop) {
              // Set lastTop to 0
              this.setState({lastTop: 0})
            }

            // Fix the position of the element to the top of the screen
            return (
              this.cloneContainer(element, {
                top: this.state.scrollY
              })
            )
          }
        }

        // Otherwise, just clone the element without fixing the position
        return this.cloneContainer(element)
      }
      // Take the rest of the children and just clone them
      else {
        return this.cloneContainer(element)
      }
    })

  // Function to clone the selected child into the scroll container
  cloneContainer = (e, props = null) => React.cloneElement(e, props, this.cloneStickyFrames(e.props.children))

  render() {
    // Clone the child element into the scroll containter
    const childElement = this.props.children[0]
    let content = this.cloneContainer(childElement)

    return (
      // Create a scroll element with an onMove function
      <Scroll {...this.props} onMove={this.updateY}>
        {content}
      </Scroll>
    )
  }
}
