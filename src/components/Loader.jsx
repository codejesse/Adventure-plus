// import { LoaderWrapper } from "../styles/LoaderStyles";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../groovyWalk.json";
import LoaderAnimation from "../Loader.json"
import { LoaderWrapper } from "../styles/LoaderStyles";

const Loader = () => (
    <LoaderWrapper>
        <Lottie animationData={LoaderAnimation} loop={true} />
    </LoaderWrapper>
)

export default Loader;