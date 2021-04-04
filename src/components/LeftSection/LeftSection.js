import styled from "styled-components"
import { bulletPoints } from "../../helpers"
const LeftSection = () => (
    <SectionWrapper>
        <div className="section--headline">2021 Inclusive Workplace Calendar</div>
        <div className="section--subtitle">Whitepaper</div>
        <div className="section-explanation"> Joonko’s 2021 Inclusive Workplace Calendar aims to help your HR teams with workplace diversity so everyone feels like part of the plan. Amplify meaningful days across the organizational calendar and embrace communal celebrations. This year’s addition also includes tips on maintaining the sense of community while remote with ideas to support workplace inclusion initiaives. We’ve highlighted important (holy)days, including:</div>
        <ul className="section--bullet--points">{bulletPoints.map(point => <li key={point}>{point}</li>)}</ul>
        <div className="section--download">Download our Inclusive Workplace Calendar and celebrate all the best days throughout the year the right way.</div>
    </SectionWrapper>
)
export default LeftSection


const SectionWrapper = styled.div`
    color: #010A60;
    letter-spacing: 0px;
    padding:203px  0 154px 222px;
    div.section--headline{
        flex-wrap:nowrap;
        max-width: 500px;
        text-align: left;
        font: normal normal 900 40px/58px Muli;
        color: #1F2773;
        opacity: 1;
    }
    div.section--subtitle{
        text-align: left;
        font: normal normal bold 25px/38px Muli;
        opacity: 1;
    }
    div.section-explanation{
        flex-wrap:nowrap;
        max-width: 650px; 
        font: normal normal normal 18px/29px Muli;
        margin: 10px 0;
    }
    ul.section--bullet--points{
        font: normal normal normal 18px/30px Muli;
        flex-wrap:nowrap;
        max-width: 550px; 
        padding-left:15px;
    }
    div.section--download{
        font: normal normal normal 18px/29px Muli;
        flex-wrap:nowrap;
        max-width: 550px; 
    }
    @media screen and (max-width: 414px) {
        margin: 60px 46px 0 37px;
        width:336px;
        padding:0;
    }

`;