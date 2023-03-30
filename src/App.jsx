import React, { useState } from "react";
import blue from "./assets/pepsi001.png";
import silver from "./assets/pepsi002.png";
import diet from "./assets/pepsi003.png";
import Logo from "./assets/logo.png"
import FaceBook from "./assets/facebook.png"
import Twitter from "./assets/twitter.png"
import Instagram from "./assets/instagram.png"

import {
  RefriBox,
  Container,
  Header,
  Nav,
  Main,
  ContainerInfo,
  ContainerProducts,
  RedeS
} from "./styled"


export default function App(props) {

  const [refri, setRefri] = useState(blue);
  const [color,setColor] = useState("#0261bf");


  return (
    <Container
      bgColor={color} 
    >
      <Header>
        <img src={Logo} alt="Logo da pepsi" />
        <Nav>
          <ul>
            <li>HOME</li>
            <li>Products</li>
            <li>What's New</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <ContainerInfo>
          <h1>
            THAT'S WHAT <br />
            <span>I LIKE</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente aspernatur possimus odio accusantium inventore. Vel perferendis molestias a unde eum dolorem officia doloremque! Doloribus asperiores quas vitae quisquam libero.
          </p>
          <button>
            View All Products
          </button>
        </ContainerInfo>
        <ContainerProducts>
          <img src={refri} alt="" />

          <RefriBox>
            <img
              onClick={() => {
                setRefri(blue);
                setColor("#0261bf")
              }}
              src={blue}
              alt=""
            />
            <img
              onClick={() => {
                setRefri(silver);
                setColor("#e60c2d")

              }}
              src={silver}
              alt=""
            />
            <img
              onClick={() => {
                setRefri(diet)
                setColor("#000")
              }}
              src={diet}
              alt=""
            />
          </RefriBox>
        </ContainerProducts>
        <RedeS>
          <img src={FaceBook} alt="Logo do face" />
          <img src={Twitter} alt="Logo do " />
          <img src={Instagram} alt="Logo do" />
        </RedeS>
      </Main>
    </Container>
  );
}
