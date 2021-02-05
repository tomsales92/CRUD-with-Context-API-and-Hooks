import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }
`;

export const AreaAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 6rem;
  width: 70vw;

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 0.3rem;
    width: 11rem;
    height: 2.5rem;
    margin-bottom: 0.3rem;
    font-weight: 600;
    color: #fff;
    background: #48bb78;
    transition: background 0.2s;
    &:hover {
      background: ${shade(0.2, '#48bb78')};
    }
  }

  button svg {
    font-size: 1.6rem;
    margin-right: 0.3rem;
  }
`;
