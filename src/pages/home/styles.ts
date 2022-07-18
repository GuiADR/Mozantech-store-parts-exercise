import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;