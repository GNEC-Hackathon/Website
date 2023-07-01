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

  const [windowScrollY, setWindowScrollY] = useState(0);

  window.addEventListener("scroll", () => {
    setWindowScrollY(window.scrollY);
  });

  return (
    <MDBAnimatedNavbar style={{zIndex: 1e101, position: "fixed", top: 0, width: "100%", boxShadow: windowScrollY == 0 ? "none" : 
    "0px 0px 10px 0px rgba(0, 0, 0, 0.2)"
    , backgroundColor: "black"}} dark expand='lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='https://gnec.ngo' target='_blank'>
            <img src='./assets/images/gnec.png' alt='logo' width={150}/>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{width: 50, height: 50, borderRadius: 50, borderWidth: 1, border: "1px solid #000", justifyContent: "center", alignItems: "center", zIndex: 1e10}}
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' style={{color: "#fff"}} fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar center show={showBasic}>
          <MDBNavbarNav style={{justifyContent: "center", zIndex: 1e100}} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}} onClick={() => {
                const y = document.getElementsByClassName("home")[0].offsetTop;
                window.scrollTo({top: y, behavior: "smooth"});
              }}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink active className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}} onClick={() => {
                  const y = document.getElementsByClassName("about")[0].offsetTop;
                  window.scrollTo({top: y, behavior: "smooth"});
                }}>
                    About
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}} onClick={() => {
                const y = document.getElementsByClassName("prizes")[0].offsetTop;
                window.scrollTo({top: y, behavior: "smooth"});
              }}>
                    Prizes
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active className="me-4" style={{fontFamily: "Montserrat", fontSize: 14}} onClick={() => {
                const y = document.getElementsByClassName("roadmap")[0].offsetTop;
                window.scrollTo({top: y, behavior: "smooth"});
              }}>
                    Roadmap
                </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        <MDBNavbarBrand href='#'>
            <MDBBtn className='me-3' outline href='https://drive.google.com/drive/u/2/folders/1QtPGBwVUJsZU5xlnUzvsSFrRnv08i6uw' target='_blank' rounded color='light' style={{fontFamily: "Montserrat", borderWidth: 1, fontSize: 14}}>
                Press Kit
            </MDBBtn>
            <MDBBtn href='https://devpost.com/submit-to/17998-gnec-hackathon/manage/submissions' target='_blank' rounded color='light' style={{fontFamily: "Montserrat", borderWidth: 1, fontSize: 14}}>
                Register
            </MDBBtn>
        </MDBNavbarBrand>

      </MDBContainer>
    </MDBAnimatedNavbar>
  );
}