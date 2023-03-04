import React from "react";
import styled from "styled-components";

function Textbox({ label, ...otherProps }) {
    return (
        <React.Fragment>
            <S.label>{label}</S.label>
            <S.input type="" {...otherProps} />
        </React.Fragment>
    );
}

const S = {
    label: styled.label`
        display: block;
    `,
    input: styled.textarea`
        padding: 1rem;
        width: 100%;
        border-radius: 0.7rem;
        margin-top: 0.3rem;
        background-color: #434343;
        outline: 0;
        border: 0.5px solid #8c8c8c;
        color: white;
        &:focus {
            opacity: 0.8;
        }
    `,
};

export default Textbox;
