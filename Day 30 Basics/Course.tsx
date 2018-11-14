import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const CourseContainer = styled.div`
    background: ${props => props.color};
    height: 100%;
    color: white;
    padding 20px;
    font-size: 18px;
    font-family: -apple-system;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: relative;

    &:hover {
        background: #3D2B8C;
        transform: scale(1.05, 1.05) translateY(-5px);
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
    }

    p {
        position: absolute;
        top: 0;
        left: 20px;
    }
`

// Define type of property
interface Props {
    text: string;
    color: string;
}

export class Course extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        color: "black",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        color: { type: ControlType.Color, title: "Background Color" },
    }

    render() {
        return <CourseContainer
            color={this.props.color}
        >
            {this.props.children}
            <p>{this.props.text}</p>
        </CourseContainer>;
    }
}
