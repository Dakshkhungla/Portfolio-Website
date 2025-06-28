import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
      <div style={{ color: "rgb(133, 76, 230)" }} className="sc-guDLey kzRRTg">&lt;</div>
<span  style={{ color: "white" }}>Daksh</span>
<div style={{ color: "rgb(133, 76, 230)" }}>/</div>
<span style={{ color: "white" }}>Khungla</span>
<div style={{ color: "rgb(133, 76, 230)" }} className="sc-guDLey kzRRTg">&gt;</div>
</NavLogo>

        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <a
  href={Bio.github}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Daksh Khungla's GitHub profile"
  style={{
    padding: '10px 16px',
    background: `${theme.primary}`,
    color: 'white',
    width: 'max-content',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
    fontWeight: 'bold',
  }}
>
  GitHub Profile
</a>

          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}
  
export default Navbar