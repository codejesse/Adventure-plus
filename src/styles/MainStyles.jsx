import styled from 'styled-components';
import background from '../media/background.jpg'

export const Wrapper = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    background-image: url(${background});
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const HeaderText = styled.h1`
    font-size: 85px;
    width: 75%;
    color: white;
`;

export const HeaderPara = styled.p`
    font-size: medium;
    color: white;
    margin-top: -35px;
`;

export const HeaderPlayBtn = styled.button`
    height: 50px;
    background-color: #3232eb;
    border: none;
    width: 15%;
    color: white;
    border-radius: 36px;
    margin-top: 10px;
`;

export const Span = styled.span`
    color: orange;
`;
