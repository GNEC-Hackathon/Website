import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBAnimatedNavbar,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBAnimatedNavbar style={{boxShadow: "none"}} expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
            <img src='./assets/images/gnec.png' alt='logo' width={150}/>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar center show={showBasic}>
          <MDBNavbarNav style={{justifyContent: "center"}} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active href='#' className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink active href='#' className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}}>
                    About
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink active href='#' className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}}>
                    Prizes
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink active href='#' className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}}>
                    Roadmap
                </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        <MDBNavbarBrand href='#'>
            <MDBBtn href='https://discord.gg/n5pcCHcGC6' target='_blank' outline rounded color='dark' style={{fontFamily: "Montserrat", borderWidth: 1, fontSize: 14}}>
                Register
            </MDBBtn>
        </MDBNavbarBrand>

      </MDBContainer>
    </MDBAnimatedNavbar>
  );
}