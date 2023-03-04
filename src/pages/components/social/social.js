import React from "react";
import styled from "styled-components";
import {
    SiInstagram,
    SiLinkedin,
    SiTwitter,
    SiGithub,
    SiFacebook,
} from "react-icons/si";
import Tag from "../../../shared/components/tag/tag";

function Social() {
    return (
        <S.iconContainer>
            <S.icon>
                <a href="href='https://instagram.com/noob.hav'">
                    <Tag>
                        <SiInstagram />
                    </Tag>
                </a>
                <p>Instagram</p>
            </S.icon>
            <S.icon>
                <a href="https://www.linkedin.com/in/vaib1343/">
                    <Tag>
                        <SiLinkedin />
                    </Tag>
                </a>
                <p>Linkedin</p>
            </S.icon>
            <S.icon>
                <a href="https://twitter.com/VaibVarshney">
                    <Tag>
                        <SiTwitter />
                    </Tag>
                </a>
                <p>Twitter</p>
            </S.icon>
            <S.icon>
                <a href="https://github.com/vaib1343">
                    <Tag>
                        <SiGithub />
                    </Tag>
                </a>
                <p>Github</p>
            </S.icon>
            <S.icon>
                <a href="https://facebook.com/imvaib">
                    <Tag>
                        <SiFacebook/>
                    </Tag>
                </a>
                <p>Facebook</p>
            </S.icon>
        </S.iconContainer>
    );
}

const S = {
    iconContainer: styled.form`
        max-width: 50%;
        margin-block: 1.5rem;
        @media only screen and (max-width: 700px) {
            max-width: 100%;
        }
    `,
    icon: styled.div`
        text-align: center;
        margin-bottom: 1rem;
        @media only screen and (max-width: 700px) {
            width: 100%;

        }
    `,
};
export default Social;
