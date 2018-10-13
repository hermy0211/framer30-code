import * as React from "react";
import styled from "styled-components";

const SubmitButton = styled.div`
    height: 36px;
    width: 100px;
    border-radius: 4px;
    background-color: #0053FF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.36);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;

    &:active {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    p {
        color: white;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        font-family: -apple-system;
    }
`

export class Submit extends React.Component {
    render() {
        return <SubmitButton>
            <p>Submit</p>
        </SubmitButton>;
    }
}