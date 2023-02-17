import styled from "styled-components";

export const NavWrapper = styled.div`
   display: flex;
   justify-content: center;
`;

export const NavContainer = styled.div`
   display: flex;
   position: fixed;
   height: 80px;
   width: 85%;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   border: 1px solid rgba(255, 255, 255, 0.3);
   margin-top: 20px;
   border-radius: 20px;
`;

export const NavLogo = styled.div`
   display: flex;
   /* width: fit-content; */
   justify-content: center;
   & img {
      margin-top: -25px;
      width: 100%;
      height: 160%;
   }
`;