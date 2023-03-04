import "./App.css";
import Experience from "./pages/experience/experience";
import Skills from "./pages/skills/skills";
import ContactUs from "./pages/contact-us/contact-us";
import styled from "styled-components";
import Social from "./pages/components/social/social";
import Project from "./pages/project/project";

function App() {
    return (
        <div className="App">
            <S.container>
                <h4>Vaibhav Varshney</h4>
                <S.socialContainer>
                    <Social />
                </S.socialContainer>
            </S.container>
            <Experience />
            <Skills />
            <Project />
            <ContactUs />
        </div>
    );
}
const S = {
    container: styled.div`
        max-width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #8c8c8c;
        h4 {
            font-size: 3rem;
        }
    `,

    socialContainer: styled.div`
        position: fixed;
        top: 30%;
        left: 10px;
    `,
};
export default App;
