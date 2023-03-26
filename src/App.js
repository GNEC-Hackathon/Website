import React, { useEffect, useState } from 'react';
import { MDBAnimatedNavbar, MDBBtn, MDBContainer, MDBNavbarLink } from 'mdb-react-ui-kit';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

import NavBar from './components/NavBar';
import GlobeModel from './components/GlobeModel';

function App() {
  return (
    <div>
      <NavBar />
      <Canvas style={{height: "50vh", width: "50vw", backgroundColor: "transparent", overflow: "show"}}>
        <ambientLight />
        <GlobeModel position={[0, -2, 0]} scale={[0.04, 0.04, 0.04]}/>
        <OrbitControls enableZoom={false} enablePan={false}/>
      </Canvas>
      <p style={{position: "absolute", left: "50vw", top: "23vh", fontFamily: "Montserrat", fontSize: 40}}>Connecting Through Doing</p>
      <img src={"./assets/images/TopTransition.png"} style={{width: "100%", marginTop: -250}}/>
      <div style={{width: "100%", backgroundColor:  "#171717", padding: 50, marginTop: -250}}>
        <div style={{flexDirection: "row",  display: "flex"}}>
          <div style={{width: "50%", padding: 50}}>
            <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "white", fontWeight: "bold"}}>ABOUT</h1>
            <p style={{fontFamily: "Montserrat", color: "#A4E9FF", fontWeight: "bold"}}>GNEC Hackathon</p>
            <p style={{fontFamily: "Montserrat", color: "#D5D5D5"}}>This hackathon is hosted by GNEC (Global NGO Executive Community), which promotes connections between non-profit and non-governmental organizations and help them find sponsors. Through our hackathon, we hope to award those who create innovative solutions while simultaneously look for talents to join our team.</p>
          </div>
          <div style={{width: "50%", padding: 50}}>
            <img src={"./assets/images/Main.png"} style={{width: "100%"}}/>
          </div>
        </div>
        <center>
          <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "white", fontWeight: "bold", margin: 100}}>RULES</h1>
          <div style={{flexDirection: "row",  display: "flex"}}>
          <div style={{width: "30%", paddingLeft: 50, paddingRight: 25}}>
            <h1 style={{fontFamily: "Montserrat", marginBottom: 30, fontSize: 25, color: "#A4E9FF", fontWeight: "bold", textAlign: "left"}}>Submission Guidelines</h1>
            <ol style={{color: "#D5D5D5", fontSize: 14, fontFamily: "Montserrat"}}>
              <li style={{marginBottom: 15}}>Each team must submit a 5 minute or less Youtube video.</li>
              <li style={{marginBottom: 15}}>Code should be submitted to Github and remain public.</li>
              <li style={{marginBottom: 15}}>Cross submission are NOT allowed.</li>
              <li>Resubmission and prior work are NOT allowed.</li>
            </ol>
          </div>
          <div style={{width: "30%", paddingLeft: 25, paddingRight: 25}}>
            <h1 style={{fontFamily: "Montserrat", marginBottom: 30, fontSize: 25, color: "#A4E9FF", fontWeight: "bold", textAlign: "left"}}>Topic & Theme</h1>
            <ol style={{color: "#D5D5D5", fontSize: 14, fontFamily: "Montserrat"}}>
              <li style={{marginBottom: 15}}>The general goal of this hackathon is to promote connections among non-profit and non-governmental organizations and help them find sponsors.</li>
              <li style={{marginBottom: 15}}>Specific theme & tracks will be announced in the opening ceremony.</li>
            </ol>
          </div>
          <div style={{width: "30%", paddingRight: 50, paddingLeft: 25}}>
            <h1 style={{fontFamily: "Montserrat", marginBottom: 30, fontSize: 25, color: "#A4E9FF", fontWeight: "bold", textAlign: "left"}}>Team Info</h1>
            <ol style={{color: "#D5D5D5", fontSize: 14, fontFamily: "Montserrat"}}>
              <li style={{marginBottom: 15}}>Team members should be no more than five people.</li>
              <li style={{marginBottom: 15}}>College students from all over the world are welcome to attend.</li>
              <li>You may group up by yourself, or attend our group formation event to find your teammates.</li>
            </ol>
          </div>
        </div>
        </center>
        <img src={"./assets/images/Slate.png"} style={{width: "100%", marginLeft: -50}}/>
      </div>
      <img src={"./assets/images/Roadmap.png"} style={{width: "100%"}}/>
      <center style={{backgroundColor: "#fff", width: "100%", padding: 100}}>
      <p style={{fontFamily: "Montserrat", color: "#A4E9FF", fontWeight: "bold"}}>Thank you to our</p>
        <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "#171717", fontWeight: "bold", marginBottom: 50}}>SPONSORS</h1>
        <img src={"./assets/images/Sponsors.png"} style={{width: "100%"}}/>
        <p style={{fontFamily: "Montserrat", color: "#A4E9FF", fontWeight: "bold", marginTop: 150}}>Thank you to our</p>
        <h1 style={{fontFamily: "Montserrat", fontSize: 40, color: "#171717", fontWeight: "bold", marginBottom: 50}}>Partners</h1>
        <img src={"./assets/images/Partners.png"} style={{width: "100%"}}/>
      </center>
    </div>
  );
}

export default App;
