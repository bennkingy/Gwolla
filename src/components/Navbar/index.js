import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <h1>dolla</h1>
        </NavLogo>
        <MobileIcon onClick={toggle}>
         <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover'>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='services'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup'>Sign up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='signin'>Sign in</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar