import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  width: ${props => (props.size === 'big' ? 600 : 400)}px;
  padding: 10px 40px 30px 40px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);

  /* modal delete */
  div {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;

    button {
      background: #fff;
      color: #333;
      border: 1px solid #454545;
      cursor: pointer;
      margin-left: 10px;
      padding: 5px 10px;
      box-shadow: 2px 1px 2px 1px #454545;
      cursor: pointer;
      transition: all 0.30 ease;
      cursor: pointer;

      &:hover {
        background: #fff;
        color: #333;
        border: 1px solid #454545;
        cursor: pointer;
        margin-left: 10px;
        padding: 5px 10px;
        box-shadow: 2px 1px 2px 1px #454545;
        cursor: pointer;
        transition: all 0.30 ease;
        cursor: pointer;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > label {
      margin-bottom: 5px;
      color: #444;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
      text-transform: uppercase;
    }

    > p {
      margin-bottom: 20px;
      color: #666;
      font-size: 16px;
      text-align: left;
    }

    > span {
      align-self: flex-start;
      margin: 5px 0 0px;
      color: #fb6f91;
      font-weight: bold;
    }

    > input,
    > textarea {
      width: 100%;
      height: 44px;
      padding: 0 0 0 10px;
      margin: 0 0 20px;
      border: 1px solid #bbb;
      border-radius: 4px;
      color: #666;
      background: #fff;
      font-size: 16px;

      &:focus {
        border-color: #f64c75;
      }
    }

    > textarea {
      height: 120px;
      padding: 5px 0 0 10px;
      resize: none;
    }

    div {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;

      button {
        background: #fff;
        color: #333;
        border: 1px solid #454545;
        cursor: pointer;
        margin-left: 10px;
        padding: 5px 10px;
        box-shadow: 2px 1px 2px 1px #454545;
        cursor: pointer;
      }

    }

  }
`;
