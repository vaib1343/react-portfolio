import React from "react";
import ReactContainer from "../../shared/components/react-container/react-container";
import Tag from "../../shared/components/tag/tag";
import {
    TbBrandReactNative,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandJavascript,
    TbBrandDocker,
} from "react-icons/tb";
import { SiRedux, SiKubernetes, SiSass, SiNextdotjs } from "react-icons/si";
import styled from "styled-components";

const Skills = () => {
    return (
        <ReactContainer title="Skills">
            <S.skillContainer>
                <S.skill>
                    <Tag>
                        <TbBrandHtml5 />
                    </Tag>
                    <p>HTML</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <TbBrandCss3 />
                    </Tag>
                    <p>CSS</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <TbBrandJavascript />
                    </Tag>
                    <p>Javascript</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <TbBrandReactNative />
                    </Tag>
                    <p>React</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <SiRedux />
                    </Tag>
                    <p>Redux</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <SiNextdotjs />
                    </Tag>
                    <p>Next.js</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <SiSass />
                    </Tag>
                    <p>Sass</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <TbBrandDocker />
                    </Tag>
                    <p>Docker</p>
                </S.skill>
                <S.skill>
                    <Tag>
                        <SiKubernetes />
                    </Tag>
                    <p>K8</p>
                </S.skill>
            </S.skillContainer>
        </ReactContainer>
    );
};

const S = {
    skillContainer: styled.div`
        max-width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-block: 1.5rem;
    `,
    skill: styled.div`
        text-align: center;
        @media only screen and (max-width: 700px) {
            width: 30%;
        }
    `,
};

export default Skills;
