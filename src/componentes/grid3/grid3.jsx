import "../grid3/grid3.css";
import arrow1 from "../imagens/arrow2.gif";
// import arrow from "./imagens/sac.";


import React from "react";
import { Container } from "react-bootstrap";

function grid3() {
  return (
    <>
    
    <Container className="bg3">
    <a href="#grid"><img className="arrow2" src={arrow1} alt="..." /></a>
        
      <h2 className="text3">About Us</h2>
      <h4 className="text4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br></br>
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        <br></br>
        since the 1500s, when an unknown printer took a galley of type and
        <br></br>
        scrambled it to make a type specimen book. It has survived not only five
        <br></br>
        centuries, but also the leap into electronic typesetting, remaining
        <br></br>
        essentially unchanged. It was popularised in the 1960s with the release
        <br></br>
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        <br></br>
        with desktop publishing software like Aldus PageMaker including versions
        <br></br>
        of Lorem Ipsum.<br></br>
        There are many variations of passages of Lorem Ipsum available, but the<br></br>
        majority have suffered alteration in some form, by injected humour, or<br></br>
        randomised words which don't look even slightly believable. If you are<br></br>
        going to use a passage of Lorem Ipsum, you need to be sure there isn't<br></br>
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum<br></br>
        generators on the Internet tend to repeat predefined chunks as<br></br>
        necessary, making this the first true generator on the Internet. It uses<br></br>
        a dictionary of over 200 Latin words, combined with a handful of model<br></br>
        sentence structures, to generate Lorem Ipsum which looks reasonable. The<br></br>
        generated Lorem Ipsum is therefore always free from repetition, injected<br></br>
        humour, or non-characteristic words etc.
      </h4>


      <button className="button-19 btnfinal"> View More </button>
      <p  className="text5" > © all rights reserved, 2022.</p>
    </Container>

 
    </>
  );
}

export default grid3;
