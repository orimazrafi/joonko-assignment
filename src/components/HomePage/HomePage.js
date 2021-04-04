import styled from "styled-components"
import LeftSection from "../LeftSection/LeftSection"
import RightSection from "../RightSection/RightSection"

const HomePage = () => {
    return (
        <HomePageWrapper>
            <LeftSection />
            <RightSection />
        </HomePageWrapper>
    )
}
export default HomePage

const HomePageWrapper = styled.div`
    display:flex;
    @media screen and (max-width: 414px) {
        flex-direction:column;
        max-width:414px;
}
    `;


