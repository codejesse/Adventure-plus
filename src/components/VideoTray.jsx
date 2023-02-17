import { VideoContainer, VideoDiv, VideoTrayWrapper } from "../styles/VideoTrayStyles";
import background from "../media/background.jpg";

const VideoTray = () => {
    return (
        <VideoTrayWrapper>
            <VideoContainer>
                <VideoDiv>
                    <img src={background} alt="thumbnail" />
                </VideoDiv>
                <VideoDiv>
                    <img src={background} alt="thumbnail" />
                </VideoDiv>
                <VideoDiv>
                    <img src={background} alt="thumbnail" />
                </VideoDiv>
            </VideoContainer>
        </VideoTrayWrapper>
    );
}

export default VideoTray;