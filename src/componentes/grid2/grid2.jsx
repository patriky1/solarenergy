import React from "react";
import { Container } from "react-bootstrap";
import "./grid2.css";
import card1 from "../imagens/card1.png"
import card2 from "../imagens/card2.png"
import card3 from "../imagens/card3.png"
function grid2() {
  return (
    <>
<Container className="bg2">
    <h3 className="text2">Your top services</h3>
      <div className="container1 ">
        
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={card1} alt="..." />
            </div>
            <div className="contentBx">
              <h3>
                Lion Happy Birthday
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a className="a1"href="#ppp">happy</a>
            </li>

          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={card2} alt="..." />
            </div>
            <div className="contentBx">
              <h3>
                FrogHappy Birthday
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a className="a1" href="#ppp">happy</a>
            </li>

          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={card3} alt="..."/>
            </div>
            <div className="contentBx">
              <h3>
                GiraffeHappy Birthday
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a className="a1" href="#ppp">happy</a>
            </li>

          </ul>
        </div>
      </div>
    </Container>
    </>
  );
}

export default grid2;
