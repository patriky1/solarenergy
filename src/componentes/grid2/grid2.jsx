import React from "react";
import { Container } from "react-bootstrap";
import "./grid2.css";

import card1 from "../imagens/card1.png"
import card2 from "../imagens/card2.png"
import card3 from "../imagens/card3.png"
import sac from "../imagens/sac.gif"
function grid2() {
  return (
    <>
<Container className="bg2">
    <h3 id="grid2" className="text2">Your top services</h3>
      <div className="container1 ">
        
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={card1} alt="..." />
            </div>
            <div className="contentBx">
              <h3 >
                Home
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
            <button  className="button-19" > Contact </button>
            </li>

          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={card2} alt="..."/>
            </div>
            <div className="contentBx">
              <h3>
              company
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
            <button className="button-19" > Contact </button>
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
              industry
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
            <button className="button-19" > Contact </button>
            </li>

          </ul>
          
        </div>
        
      </div>
      <div><button className="buttonall"  > View all Services </button></div>
        <a href="#chat"><img className="sac" src={sac} alt="..." /></a>
        <p className="textchat">Chat</p>
      
    </Container>
    </>
  );
}

export default grid2;
