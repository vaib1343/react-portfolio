import React from "react";
import styled from "styled-components";

function Button({ children, ...props }) {
    return <S.button {...props}>{children}</S.button>;
}

const S = {
    button: styled.button`
        border: 0px;
        outline: 0px;
        padding: 1rem 2rem;
        border-radius: 1rem;
        background-color: #434343;
        color: white;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    `,
};

export default Button;
