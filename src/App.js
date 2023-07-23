import React, { useEffect, useState } from 'react';
import { MDBAnimatedNavbar, MDBBtn, MDBContainer, MDBNavbarLink, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, SpotLight } from '@react-three/drei';

import NavBar from './components/NavBar';
import GlobeModel from './components/GlobeModel';

function App() {

  useEffect(() => {
    if (window.self == window.top && !window.location.href.includes("localhost"))
    {
      window.location.href = "https://gnec.ngo/hackathon";
    }
  })

  return (
    <div style={{backgroundColor: "black"}}>
      <Canvas className="home" style={{width: "100%", backgroundColor: "transparent", overflow: "show", height: "100vh"}}>
        {/* <ambientLight /> */}
        <GlobeModel position={[0, -2.1, 0]} scale={[0.04, 0.04, 0.04]}/>
        <OrbitControls enableZoom={false} enablePan={false}/>
      </Canvas>
      <div style={{height: "50vh"}}/>
      <div style={{position: "absolute", top: "40vh", left: 50, maxWidth: 300}}>
        <p style={{fontFamily: "Montserrat", fontSize: "2rem", color: "white", fontWeight: "bold", color: "#fff",
        textShadow: "0px 0px 10px rgba(0, 0, 0, 1)"}}>
          {"< Connecting Through Doing />"}
        </p>
        <p style={{fontFamily: "Montserrat", fontSize: "1rem", color: "white", fontWeight: "bold", color: "#fff",
        textShadow: "0px 0px 10px rgba(0, 0, 0, 1)"}}>
          {"Register Now On Devpost"}
        </p>
      </div>
      <img src={"./assets/images/TopTransition.png"} style={{width: "100%", marginTop: -600}}/>
      <div className='about' style={{width: "100%", backgroundColor:  "#171717", padding: 50, marginTop: -350}}>
        <center>
          <h3 style={{color: "white", marginBottom: 25}}>NEW: WATCH OPENING CEREMONY NOW</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LXB61MppXu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </center>

        <MDBRow style={{
            width: "100%",
            justifyContent: "center",
            marginTop: 100
          }}>
          <MDBCol size='12' sm='5'>
            <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "white", fontWeight: "bold"}}>ABOUT</h1>
            <p style={{fontFamily: "Montserrat", color: "#A4E9FF", fontWeight: "bold"}}>GNEC Hackathon</p>
            <p style={{fontFamily: "Montserrat", color: "#D5D5D5"}}>This hackathon is hosted by GNEC (Global NGO Executive Committee), which promotes connections between non-profit and non-governmental organizations and help them find sponsors. Through our hackathon, we hope to award those who create innovative solutions.</p>
          </MDBCol>
          <MDBCol size='12' sm='5'>
            <img src={"./assets/images/Main.png"} style={{width: "100%"}}/>
          </MDBCol>
        </MDBRow>
        <center className='rules' style={{marginTop: "20%", marginBottom: "20%"}}>
          <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "white", fontWeight: "bold", marginTop: 100, marginBottom: 25}}>RULES</h1>
          <MDBRow style={{
            width: "100%",
            justifyContent: "center",
          }}>
            <MDBCol size='6' sm='3'>
              <h1 style={{fontFamily: "Montserrat", marginBottom: 30, fontSize: 25, color: "#A4E9FF", fontWeight: "bold", textAlign: "left"}}>Submission Guidelines</h1>
              <ol style={{color: "#D5D5D5", fontSize: 14, fontFamily: "Montserrat"}}>
                <li style={{marginBottom: 15}}>Each team must submit a 5 minute or less YouTube video regarding their project.</li>
                <li style={{marginBottom: 15}}>Any code should be submitted as a ZIP file and other projects  should be submitted through a slideshow or PDF.</li>
                <li>Re-submission/Cross-submissions and prior work are NOT allowed.</li>
              </ol>
            </MDBCol>
            <MDBCol size='6' sm='3'>
              <h1 style={{fontFamily: "Montserrat", marginBottom: 30, fontSize: 25, color: "#A4E9FF", fontWeight: "bold", textAlign: "left"}}>Topic & Theme</h1>
              <ol style={{color: "#D5D5D5", fontSize: 14, fontFamily: "Montserrat"}}>
                <li style={{marginBottom: 15}}>The goal of this hackathon is to promote connections among non-profit and non-governmental organizations and help them find sponsors.</li>
                <li style={{marginBottom: 15}}> Specific guidelines and instructions will be announced in the opening ceremony.</li>
              </ol>
            </MDBCol>
            <MDBCol size='6' sm='3'>
              <h1 style={{fontFamily: "Montserrat", marginBottom: 30, fontSize: 25, color: "#A4E9FF", fontWeight: "bold", textAlign: "left"}}>Team Info</h1>
              <ol style={{color: "#D5D5D5", fontSize: 14, fontFamily: "Montserrat"}}>
                <li style={{marginBottom: 15}}>Team members should be no more than five people.</li>
                <li style={{marginBottom: 15}}>Everyone is welcome to attend.</li>
                <li>You may group up by yourself, or attend our group formation event to find your teammates.</li>
              </ol>
            </MDBCol>
        </MDBRow>
        </center>
        <center>
          <img className='prizes' src={"./assets/images/Slate.png"} style={{width: "100%", maxWidth: 1000, marginLeft: -50}}/>
        </center>
      </div>
      <center className='roadmap' style={{width: "100%", backgroundColor: "#171717"}}>
        <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "white", fontWeight: "bold", marginBottom: 25}}>ROADMAP</h1>
        <img src={"./assets/images/Roadmap.png"} style={{width: "100%", maxWidth: 1000, marginBottom: -1}}/>
      </center>
      <center style={{backgroundColor: "#fff", width: "100%", padding: 100, marginTop: 0}}>
      <p style={{fontFamily: "Montserrat", color: "#A4E9FF", fontWeight: "bold", marginTop: 50}}>Thank you to our</p>
        <h1 className='partners' style={{fontFamily: "Montserrat", fontSize: 40, color: "#171717", fontWeight: "bold", marginBottom: 50}}>PARTNERS</h1>
        <img src={"./assets/images/Partners.png"} style={{width: "100%"}}/>
        <p style={{fontFamily: "Montserrat", color: "#A4E9FF", fontWeight: "bold", marginTop: 50}}>Meet our</p>
        <h1 className='partners' style={{fontFamily: "Montserrat", fontSize: 40, color: "#171717", fontWeight: "bold", marginBottom: 50}}>ESTEEMED PANEL OF JUDGES</h1>
        <img src={"./assets/images/Judge.png"} style={{width: "100%"}}/>
      </center>
      <NavBar />
    </div>
  );
}

export default App;
