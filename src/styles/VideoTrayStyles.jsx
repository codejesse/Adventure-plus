import styled from "styled-components";

export const VideoTrayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    height: 40vh;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    padding: 5px;
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    border-radius: 5px;
    overflow: auto;
    scroll-behavior: smooth;
`;

export const VideoDiv = styled.div`
    width: 100%;
    height: 550px;
    margin-bottom: 5px;
    & img {
        width: 100%;
    }
`