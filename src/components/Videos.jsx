import { CardContatiner, CardList, MovieGenreWrapper, VideoWrapper } from "../styles/VideosStyles";

const Videos = () => {
    return ( 
        <VideoWrapper>
            <MovieGenreWrapper>
                <h1>Recommended For you</h1>
                <CardList>
                    <CardContatiner />
                    <CardContatiner />
                    <CardContatiner />
                    <CardContatiner />
                    <CardContatiner />
                </CardList>
            </MovieGenreWrapper>
        </VideoWrapper>
     );
}
 
export default Videos;