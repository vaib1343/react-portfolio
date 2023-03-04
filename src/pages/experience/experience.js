import React from "react";
import styled from "styled-components";
import ReactContainer from "../../shared/components/react-container/react-container";

function Experience() {
    return (
        <ReactContainer title="Experience">
            <S.companyContainer>
                <h3>Flipkart via thinkify labs</h3>
                <time>December 2021 - April 2023</time>
                <ul>
                    <li>
                        Involved in designing the user experience interface
                        Ul/UX strategy and converting findings into Ul designs.{" "}
                    </li>
                    <li>
                        Builded reusable React components with modular CSS,
                        manage data on the client with Redux, and test
                        everything with Jest.{" "}
                    </li>
                    <li>
                        Investigatedand resolved production issues with the help
                        application support team. Contributed to the design and
                        architecture of the project.
                    </li>
                </ul>
            </S.companyContainer>
            <S.companyContainer>
                <h3>Enuke </h3>
                <time>April 2021 - December 2021</time>
                <ul>
                    <li>
                        Worked as a front-end developer extensively with state
                        management and API integrations, dynamic data, along
                        with better practices of programming.
                    </li>
                </ul>
            </S.companyContainer>
        </ReactContainer>
    );
}

const S = {
    companyContainer: styled.div`
        margin-block: 1rem;
    `,
};

export default Experience;
