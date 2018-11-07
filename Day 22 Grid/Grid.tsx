import * as React from "react"

let compact = true

// Code based off 'Grid' component by Benjamin Den Boer
export class Grid extends React.Component {
    state = {
        radius: 6,
        rows: 3,
        columns: 3,
        padding: 15,
        color: "rgba(0, 0, 0, 0.2)",
        border: "rgba(0, 0, 0, 0.4)",
        size: {width: 300, height: 300}
    }

    changeGrid = () => {
        let gridIcon:HTMLElement = document.querySelector(".grid")
        let listIcon:HTMLElement = document.querySelector(".list")
        if (compact) {
            compact = false
            this.setState({rows: 9, columns: 1, size: {width: 300, height: 800}})
            gridIcon.style.display = "initial"
            listIcon.style.display = "none"
        } else {
            compact = true
            this.setState({rows: 3, columns: 3, size: {width: 300, height: 300}})
            listIcon.style.display = "initial"
            gridIcon.style.display = "none"
        }
    }

    render() {
        const { radius, rows, columns, padding, color, border } = this.state

        let array = []

        let width = this.state.size.width / columns
        width = width - (padding * (columns - 1)) / columns
        let height = this.state.size.height / rows
        height = height - (padding * (rows - 1)) / rows

        let Cell = (props: {x: number, y: number}) => {
            return (
                <div
                    style={{
                    position: "absolute",
                    backgroundColor: color,
                    boxShadow: `inset 0 0 0 1px ${border}`,
                    borderRadius: radius,
                    width: width,
                    height: height,
                    left: props.x,
                    top: props.y,
                    }}
                >
                </div>
            )
        }

        if (React.Children.count(this.props.children) > 0) {
            Cell = (props: {x: number, y: number}) => {
                return React.cloneElement(this.props.children[0], {
                    top: props.y,
                    left: props.x,
                    width: width,
                    height: height,
                    radius: radius
                })
            }
        }

        for (let rowAmount = 0; rowAmount < rows; rowAmount++) {
            for (let colAmount = 0; colAmount < columns; colAmount++) {
                let x = colAmount * (width + padding)
                let y = rowAmount * (height + padding)
                array.push(
                    <Cell
                    x={x}
                    y={y}
                    />
                )
            }
        }

        return (
            <div>
                <div
                    style={{
                        position: "absolute",
                        width: "50px",
                        height: "50px",
                        background:"rgba(0,0,0,0)",
                        top:"-120px",
                        right:"0px"
                    }}
                    onClick={this.changeGrid}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="grid" style={{display: "none"}}><path d="M 42 22 C 42 21.448 42.448 21 43 21 L 49 21 C 49.552 21 50 21.448 50 22 L 50 28 C 50 28.552 49.552 29 49 29 L 43 29 C 42.448 29 42 28.552 42 28 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 32 22 C 32 21.448 32.448 21 33 21 L 39 21 C 39.552 21 40 21.448 40 22 L 40 28 C 40 28.552 39.552 29 39 29 L 33 29 C 32.448 29 32 28.552 32 28 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 22 22 C 22 21.448 22.448 21 23 21 L 29 21 C 29.552 21 30 21.448 30 22 L 30 28 C 30 28.552 29.552 29 29 29 L 23 29 C 22.448 29 22 28.552 22 28 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 42 12 C 42 11.448 42.448 11 43 11 L 49 11 C 49.552 11 50 11.448 50 12 L 50 18 C 50 18.552 49.552 19 49 19 L 43 19 C 42.448 19 42 18.552 42 18 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 32 12 C 32 11.448 32.448 11 33 11 L 39 11 C 39.552 11 40 11.448 40 12 L 40 18 C 40 18.552 39.552 19 39 19 L 33 19 C 32.448 19 32 18.552 32 18 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 22 12 C 22 11.448 22.448 11 23 11 L 29 11 C 29.552 11 30 11.448 30 12 L 30 18 C 30 18.552 29.552 19 29 19 L 23 19 C 22.448 19 22 18.552 22 18 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 42 32 C 42 31.448 42.448 31 43 31 L 49 31 C 49.552 31 50 31.448 50 32 L 50 38 C 50 38.552 49.552 39 49 39 L 43 39 C 42.448 39 42 38.552 42 38 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 32 32 C 32 31.448 32.448 31 33 31 L 39 31 C 39.552 31 40 31.448 40 32 L 40 38 C 40 38.552 39.552 39 39 39 L 33 39 C 32.448 39 32 38.552 32 38 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 22 32 C 22 31.448 22.448 31 23 31 L 29 31 C 29.552 31 30 31.448 30 32 L 30 38 C 30 38.552 29.552 39 29 39 L 23 39 C 22.448 39 22 38.552 22 38 Z" fill="rgba(115, 115, 115, 1.00)"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="list"><path d="M 21 13 C 22.657 13 24 14.343 24 16 C 24 17.657 22.657 19 21 19 C 19.343 19 18 17.657 18 16 C 18 14.343 19.343 13 21 13 Z" fill="hsl(0, 0%, 45%)"/><path d="M 21 22 C 22.657 22 24 23.343 24 25 C 24 26.657 22.657 28 21 28 C 19.343 28 18 26.657 18 25 C 18 23.343 19.343 22 21 22 Z" fill="hsl(0, 0%, 45%)"/><path d="M 21 31 C 22.657 31 24 32.343 24 34 C 24 35.657 22.657 37 21 37 C 19.343 37 18 35.657 18 34 C 18 32.343 19.343 31 21 31 Z" fill="hsl(0, 0%, 45%)"/><path d="M 28 16 C 28 14.895 28.895 14 30 14 L 48 14 C 49.105 14 50 14.895 50 16 L 50 16 C 50 17.105 49.105 18 48 18 L 30 18 C 28.895 18 28 17.105 28 16 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 28 25 C 28 23.895 28.895 23 30 23 L 48 23 C 49.105 23 50 23.895 50 25 L 50 25 C 50 26.105 49.105 27 48 27 L 30 27 C 28.895 27 28 26.105 28 25 Z" fill="rgba(115, 115, 115, 1.00)"/><path d="M 28 34 C 28 32.895 28.895 32 30 32 L 48 32 C 49.105 32 50 32.895 50 34 L 50 34 C 50 35.105 49.105 36 48 36 L 30 36 C 28.895 36 28 35.105 28 34 Z" fill="rgba(115, 115, 115, 1.00)"/></svg>
                </div>
                <div>{array}</div>
            </div>
        )
    }
}