import React from "react";
import ReactContainer from "../../shared/components/react-container/react-container";
import Button from "../../shared/components/button/button";
import styled from "styled-components";

function Project() {
    return (
        <ReactContainer title="Projects">
            <ul>
                <S.project>
                    <h2>Bookit (hotel booking application)</h2>
                    <S.buttons>
                        <a href="https://github.com/vaib1343/bookit">
                            <Button>Repo</Button>
                        </a>
                        <a href="https://bookit1343.vercel.app/">
                            <Button>Demo</Button>
                        </a>
                    </S.buttons>
                    <p>
                        A platform that helps people find hotels that suit their
                        needs. It is built with an integrated Stripe payment
                        system utilising nextjs and redux for state management.
                    </p>
                </S.project>
                <S.project>
                    <h2>Coronameter</h2>
                    <S.buttons>
                        <a href="https://github.com/vaib1343/covid">
                            <Button>Repo</Button>
                        </a>
                        <a href="https://vaib1343.github.io/covid/ ">
                            <Button>Demo</Button>
                        </a>
                    </S.buttons>
                    <p>
                        This website offers a graphic portrayal of the COVID19
                        pandemic's global death toll and population of infected
                        persons. Additionally, it provides data broken down by
                        country on the number of fatalities, infected, and
                        recovered people.
                    </p>
                </S.project>
                <S.project>
                    <h2>Ecom App</h2>
                    <S.buttons>
                        <a href="https://github.com/vaib1343/ecom-app">
                            <Button>Repo</Button>
                        </a>
                        <a href="https://velvety-syrniki-8e9809.netlify.app/">
                            <Button>Demo</Button>
                        </a>
                    </S.buttons>
                    <p>A platform where users can find fashionable clothes.</p>
                </S.project>
            </ul>
        </ReactContainer>
    );
}

const S = {
    project: styled.li`
        margin-block: 1.5rem;
    `,
    buttons: styled.div`
        margin-block: 1rem;
        display: flex;
        a {
            margin-right: 1rem;
        }

        @media only screen and (max-width: 700px) {
            flex-direction: column;
            a {
                margin-bottom: 1rem;
            }
        }
    `,
};

export default Project;
