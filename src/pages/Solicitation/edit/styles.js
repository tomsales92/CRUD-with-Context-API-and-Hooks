import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 6rem;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
  }

  div label {
    text-transform: uppercase;

    font-weight: 600;
    font-size: 0.9rem;
    color: #898989;
    margin: 0.8rem 0.7rem 0.3rem 0;
  }

  div input {
    border: 0.1rem solid #d8d8d8;
    border-radius: 0.2rem;

    height: 2rem;
    width: 25rem;

    &::placeholder {
      padding-left: 0.4rem;
      font-size: 0.8rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 0.4rem;
    margin-top: 0.5rem;
    width: 25rem;
    height: 3rem;
    font-weight: 600;
    color: #fff;
    background: #48bb78;
    transition: background 0.2s;
    &:hover {
      background: ${shade(0.2, '#48bb78')};
    }
  }

  div a {
    margin: 0.6rem auto;
    text-decoration: none;
    color: #898989;
    transition: color 0.2s;

    &:hover {
      color: #3b6daa;
    }
  }
`;
