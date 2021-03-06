import { css } from '@emotion/css';

const styles = css`
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0px;
  }

  #header {
    display: flex;
    margin-left: 85%;
    margin-top: 50px;
    width: 100%;
    height: 44px;
    background-image: url('https://www.thecocktaildb.com/images/logo.png');
    background-repeat: no-repeat;
  }

  #h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 120px;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
  }

  #img {
    border-radius: 10px;
  }

  #load {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
  }
`;

export default styles;
