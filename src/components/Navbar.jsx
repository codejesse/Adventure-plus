import { NavContainer, NavLogo, NavWrapper } from "../styles/NavbarStyles";
import logo from "../media/discovery-plus-logo.png";

const Navbar = () => {
    return ( 
        <NavWrapper>
            <NavContainer>
                <NavLogo>
                    <img src={logo} alt="logo" />
                </NavLogo>
            </NavContainer>
        </NavWrapper>
     );
}
 
export default Navbar;