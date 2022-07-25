import styled from 'styled-components';
import { lighten } from 'polished';

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
  display: none;

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

  &.typesList {
    width: 100%;
    height: 50px;
    background-color: #FFF;
    color: #000;
    position: relative;
    overflow: inherit;

    & div {
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      
      & .empty {
        justify-content: center;
        line-height: 50px;
      }

      & .notEmpty{
        flex-wrap: wrap;
        gap: 2px;
        padding: 2px;
        align-items: center;
      }

      & span {
        background-color: ${props => props.theme.colors.secondary};
        padding: 0 5px;
        border-radius: 5px;
        font-size: 10px;
        line-height: 20px;
        height: 20px;
      }
      &:hover ul {
      display: block;
    }
      
    }

    
    & ul {
      position: absolute;
      z-index: 20;
      top: 50px;
      left: 0;
      background-color: #fff;
      width: 100%;
      border-radius: 5px;
      list-style: none;
      overflow: hidden;
      box-shadow: 2px 2px 10px 0px ${props => props.theme.colors.shadow};
      display: none;

      & li {
        text-align: center;
        padding: 10px 20px;
        cursor: pointer;

        &.checked{
          background-color:  ${props => lighten(0.3, props.theme.colors.primary)};
        }

        &:hover {
          background-color:  ${props => lighten(0.2, props.theme.colors.primary)};
        }

      }
    }
  }

  /* & div{
    

    & ul{
      display: none;
    }

    & li {
    border: none;
    background-color: #FFF;
    margin: 0 15px;
    width: 100%;
    height: 50px;
    outline: none;

  }}
   */
  & button {
    height: 50px;
    width: 50px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    color:  ${props => props.theme.colors.primary};
  }
`;