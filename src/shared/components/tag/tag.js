import React from "react";
import styled from "styled-components";

const Tag = ({ children }) => {
    return <S.container>{children}</S.container>;
};

const S = {
    container: styled.div`
        cursor: pointer;
        background-color: #434343;
        border-radius: 1rem;
        font-size: 2.5rem;
        width: fit-content;
        color: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        &:hover {
            opacity: 0.7;
        }
    `,
};

export default Tag;
