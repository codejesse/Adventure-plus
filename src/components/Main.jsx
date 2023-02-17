import { HeaderPara, HeaderPlayBtn, HeaderText, HeaderWrapper, Span, Wrapper } from "../styles/MainStyles";

const Main = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderText>Live your <Span>Adventure</Span> with Todd</HeaderText>
                <HeaderPara>Coming soon | Friday, November 3rd, 14:20</HeaderPara>
                <HeaderPlayBtn>Watch now</HeaderPlayBtn>
            </HeaderWrapper>
        </Wrapper>
    );
}

export default Main;