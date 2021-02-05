import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
  width: 70vw;
  height: 6rem;
  background: #f7fafc;
  border-radius: 0.5rem;
  border: 0.1rem solid #efefef;
`;

export const ListData = styled.div`
  width: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 0.1rem;
  }

  .designation {
    font-weight: 500;
    color: #898989;
  }
  .locate {
    display: flex;
    align-items: center;
  }
`;

export const ListAction = styled.div`
  width: 10%;
  display: flex;
  align-items: center;

  button {
    margin-right: 0.5rem;
    border: 0;
    background: transparent;
    padding: 0.3rem;
    border-radius: 50%;

    &:hover {
      background: #dbd9d9;
    }
  }

  button svg {
    font-size: 1.7rem;
  }
`;
