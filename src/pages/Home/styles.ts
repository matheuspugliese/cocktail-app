import { css } from '@emotion/css';

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  #logo {
    height: 70px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://www.thecocktaildb.com/images/logo.png');
    background-repeat: no-repeat;
  }

  #search-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    grid-column-gap: 10px;
    width: 600px;
  }

  #icon {
    display: flex;
    height: 50px;
    width: 30px;
    border: none;
    background-color: transparent;
  }

  #search-input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    outline: none;
    background-color: transparent;
    margin-right: -45px;
    border: 1px solid;
    border-radius: 15px;
  }

  #search-input:hover {
    box-shadow: 1px 1px 2px 2px rgb(214, 214, 214);
  }

  #button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 120px;
    outline: none;
    color: #000;
    box-shadow: 1px 2px 2px rgb(143, 143, 143);
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    transition-duration: 0.4s;
    margin-left: 15px;
  }

  #button:hover {
    background-color: rgb(221, 220, 220);
    box-shadow: 2px 3px 3px rgb(143, 143, 143);
  }

  p {
    font-size: 30px;
  }

  #box {
    width: 300px;
    margin-top: 50px;
    border-bottom: 20px solid #03a9f4;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  #box p {
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .nav {
    color: #000;
    transition: transform 0.5s;
    outline: none;
  }

  .nav:hover {
    background: #25bcff;
  }

  #box ul {
    position: relative;
    background: #fff;
  }

  #box ul li {
    color: #000;
    list-style: none;
    padding: 10px;
    width: 100%;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    opacity: 1;
    transition: transform 0.5s;
  }

  #box ul li:hover {
    transform: scale(1.1);
    z-index: 100;
    background: #25bcff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }

  #box ul li:hover a {
    color: #fff;
  }
`;

export default styles;
