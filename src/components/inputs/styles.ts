import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  color: #FFF;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;

  & input {
    border:none;
    background-color: #FFF;
    height: 50px;
    width: 100%;
    padding: 0 15px;
    font-size: 16px;
    outline: none;
    box-shadow: 0px 0px #ccc;

  }

  & div{
    width: 100%;
    background-color: #FFF;

    & select {
    border: none;
    background-color: #FFF;
    margin: 0 15px;
    width: 100%;
    height: 50px;
    outline: none;

  }}
  
  & button {
    height: 50px;
    width: 50px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    color:  ${props => props.theme.colors.primary};
  }
`;