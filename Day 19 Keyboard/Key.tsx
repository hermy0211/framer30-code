import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const KeyboardElement = styled.div`
    height: 42px;
    width: 31px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.36);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;

    &:active {
        background-color: rgba(4, 4, 16, 0.2);
    }

    p {
        position: absolute;
        bottom: -15px;
        color: black;
        text-align: center;
        font-size: 25px;
        font-family: -apple-system;
    }
`

// Define type of property
interface Props {
    text: string;
}

export class Key extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        text: "q"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" }
    }

    render() {
        return <KeyboardElement>
            <p>{this.props.text}</p>
        </KeyboardElement>;
    }
}

export default Key