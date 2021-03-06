import { css } from '@emotion/css';

const styles = css`
  #div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  #div p {
    display: flex;
    justify-content: center;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 50px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  #link {
    color: #000;
    background: #fff;
    transition: transform 0.5s;
    outline: none;
  }

  #link:hover {
    background: #25bcff;
  }

  #div ul {
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  #div ul li {
    display: flex;
    color: #000;
    align-items: center;
    grid-column-gap: 10px;
    list-style: none;
    padding: 10px;
    background: #fff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    opacity: 1;
    transition: transform 0.5s;
  }

  #div ul li:hover {
    transform: scale(1.1);
    z-index: 100;
    background: #25bcff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`;

export default styles;
