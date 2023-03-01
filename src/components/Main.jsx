import { ButtonWrapper, DescPara, HeaderPara, HeaderPlayBtn, HeaderText, HeaderWrapper, Span, WatchlistBtn, Wrapper } from "../styles/MainStyles";
import Channels from "./Channels";
import VideoTray from "./VideoTray";

const Main = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderText>Live your <Span>Adventure</Span> with Todd</HeaderText>
                <DescPara>Todd embarks on an awesome adventure of his life with his pet monkey and today enjoy the splendour of this world and what it offers</DescPara>
                <HeaderPara>Coming soon | Friday, November 3rd, 14:20</HeaderPara>
                <ButtonWrapper>
                    <HeaderPlayBtn>Start Watching</HeaderPlayBtn>
                    <WatchlistBtn></WatchlistBtn>
                </ButtonWrapper>
                {/* <Channels /> */}
            </HeaderWrapper>
            {/* <VideoTray /> */}
        </Wrapper>
    );
}

export default Main;