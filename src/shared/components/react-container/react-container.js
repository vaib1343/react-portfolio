import React from "react";
import styled from "styled-components";

const ReactContainer = ({ children, title = "component" }) => {
    return (
        <S.container>
            <S.upperBorder />
            <S.componentHeading>
                {`const ${title} = () => {`}
                <S.fragments>{`return <>`}</S.fragments>
                <S.content>{children}</S.content>
                <S.fragments>{`</>`}</S.fragments>
                <div>{`}`}</div>
            </S.componentHeading>
            <S.lowerBorder />
        </S.container>
    );
};

const S = {
    container: styled.div`
        max-width: 90%;
        margin: auto;
        margin-block: 3rem;
    `,
    componentHeading: styled.p`
        font-size: 1.3rem;
        margin: 2rem;
        color: #8c8c8c;
        font-style: italic;
    `,

    fragments: styled.p`
        margin-left: 1.5rem;
    `,

    upperBorder: styled.div`
        border: 0.5px solid #8c8c8c;
        border-bottom: 0px;
        height: 2rem;
    `,
    lowerBorder: styled.div`
        border: 0.5px solid #8c8c8c;
        border-top: 0px;
        height: 2rem;
    `,
    content: styled.div`
        letter-spacing: 0.1rem;
        margin-left: 4rem;
        line-height: 2.5rem;
        font-style: normal;
    `,
};

export default ReactContainer;
