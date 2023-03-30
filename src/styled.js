import styled from "styled-components";


export const Container = styled.div`
  padding: 15px 20px;
  background-color: ${props => props.bgColor || "#0261bf" };
`


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-left: 15px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`


export const Nav = styled.nav`
  
  ul {
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 20px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      opacity: .6;
      transform: translateY(-5px);
    }
  }

`

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`


export const ContainerInfo = styled.div`
  color: #fff;

  h1 {
    font-size: 3em;
    width: 26.5vw;
    line-height: 1.5em;
    letter-spacing: 1px; 

    span {
      font-size: 2em;
    }
  }

  p {
    width: 38.5vw;
    font-size: 21px;
    margin: 20px 0;
  }

  button {
    width: 14vw;
    height: 6vh;
    border-radius: 20px;
    border: none;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 16px;
    font-weight: bold;
    background-color: rgb(228, 226, 228);
    transition: all 0.5s ease;

    &:hover {
      opacity: .8;
    }
  }
`

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

`


export const RefriBox = styled.div`
  display: flex;
  justify-content: space-around;
  height: 18vh;
  width: 20%;
  margin-top: 420px;
  margin-right: 45px;
  img {
    margin: 0 20px;
    height: 15vh;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      transform: translateY(-15px);
    }
  }
`;


export const RedeS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 46px;
    height: 50px;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      transform: translateY(-15px);
    }

    &:nth-child(1) {
    width: 30px;
  }
  }

`
