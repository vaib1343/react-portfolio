import React, { useRef } from "react";
import styled from "styled-components";
import ReactContainer from "../../shared/components/react-container/react-container";
import Input from "../../shared/components/input/input";
import Textbox from "../../shared/components/textbox/textbox";
import emailjs from "@emailjs/browser";
import Button from "../../shared/components/button/button";

function ContactUs() {
    const form = useRef();
    const SERVICE_ID = "service_nswknwi";
    const TEMPLATE_ID = "template_jer1p6m";
    const USER_ID = "fOiVoiLc0LGZxeiEg";

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                alert("Send your mail successfully");
            },
            (error) => {
                alert("Unable to send");
            }
        );
    };
    return (
        <ReactContainer title="Contact">
            <S.container ref={form} onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="from_name"
                />
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="xyz@gmail.com"
                    name="email_id"
                />
                <Textbox
                    label="Message"
                    id="message"
                    name="message"
                    placeholder="Hi! any message"
                />
                <Button type="submit">Send</Button>
            </S.container>
        </ReactContainer>
    );
}
const S = {
    container: styled.form`
        max-width: 50%;
        margin-block: 1.5rem;
        @media only screen and (max-width: 700px) {
            max-width: 100%;
        }
    `,
    icon: styled.div`
        text-align: center;
        @media only screen and (max-width: 700px) {
            width: 100%;
        }
    `,
};
export default ContactUs;
