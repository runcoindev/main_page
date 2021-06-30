import React, { useState } from "react";
import logoImg from "../../../images/runcoin-logo-img.svg";
import { animateScroll as scroll } from "react-scroll";
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavImg,
  MobileIcon,
  Hamburger,
  NavMenu,
  NavLink,
  NavItem,
  PlayItem,
  PlayLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleClickPlay = () => {
    window.open("https://app.runcoin.page/", '_blank');
  }

  const handleClickTwitter = () => {
    window.open("https://twitter.com/RUN_FINANCE", '_blank');
  }
  const handleClickGithub = () => {
    window.open("https://github.com/runcoindev/", '_blank');
  }

  return (
    <Nav className="shadow-sm">
      <NavBarContainer>
        <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          <NavImg src={logoImg} alt="logo-img"></NavImg>RUNCOIN
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <Hamburger className="opened" /> : <Hamburger />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLink
              to="work"
              smooth={true}
              duration={1000}
              onClick={handleClick}
              exact="true"
              offset={-60}
            >
              How it Works
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              to="features"
              smooth={true}
              duration={1000}
              onClick={handleClick}
              exact="true"
              offset={-60}
            >
              Features
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink
              to="team"
              smooth={true}
              duration={1000}
              onClick={handleClick}
              exact="true"
              offset={-60}
            >
              Team
            </NavLink>
          </NavItem> */}
          <PlayItem>
            <PlayLink href="#" onClick={handleClickPlay}>Start</PlayLink>
          </PlayItem>
          <NavItem>
            <NavLink
              to="team"
              smooth={true}
              duration={1000}
              onClick={handleClickTwitter}
              exact="true"
              offset={-60}
            >
              <TwitterIcon></TwitterIcon>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="team"
              smooth={true}
              duration={1000}
              onClick={handleClickGithub}
              exact="true"
              offset={-60}
            >
              <GithubIcon></GithubIcon>
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;
