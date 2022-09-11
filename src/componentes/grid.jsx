import { Container, Row } from "react-bootstrap";

import "./grid.css";
import arrow from "./imagens/arrow.gif";
import logo from "./imagens/logo.png";
export default grid;

function grid() {
  return (
    <>
<Container className="bg">
    <img className="logo" src={logo} alt="..." />
      
        <Row className="navbarx">
          <a className="navbar" href="#grid2">
            {" "}
            Packpages{" "}
          </a>
          <a className="navbar" href="#packpages">
            {" "}
            Contact{" "}
          </a>
          <a className="navbar" href="#packpages">
            {" "}
            sac{" "}
          </a>
        </Row>
 
      <Container className="intro">
        <Row>
          <h1>
            {" "}
            High-tech solar energy<br></br> for your family
          </h1>
          <h6 className="intro2">
            There are many variations of passages of Lorem Ipsum available,
            <br></br> but the majority have suffered alteration in some form, by
            injected.
          </h6>
          
          <Row>
          <button className="button-19" > Contact </button>
          </Row>
        </Row>
        <a href="#grid2"><img className="arrow" src={arrow} alt="..." /></a>
      </Container>
      </Container>
  

    </>
  );
}
