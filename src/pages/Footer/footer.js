import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <S.container>
            Made by vaibhav varshney
        </S.container>
    );
}

const S = {
    container: styled.div`
        max-width: 90%;
        margin: auto;
        padding-block: 2rem;
        font-size: 1.3rem;
        color: #8c8c8c;
        display: flex;
        justify-content: end;

    `,
};

export default Footer;
