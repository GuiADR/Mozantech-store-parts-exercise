import styled from 'styled-components';
import { lighten } from 'polished';

export const ViewUl = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Card = styled.div`
  max-width: 800px;
  margin: 30px auto;
  background:  ${props => lighten(0.3, props.theme.colors.primary)};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 10px 0px ${props => props.theme.colors.shadow};
  transition: all 0.4s;
  & div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.part__description{
      & span {
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
      }
    }

    &.photo__container{
      padding: 30px;
      & div {
        padding: 30px;
        width: 100%;
        height: 100%;
        border: 1px solid  ${props => lighten(0.2, props.theme.colors.primary)};
        background-color: ${props => lighten(0.3, props.theme.colors.primary)};
        box-shadow: inset 0px 0px 10px 0px ${props => props.theme.colors.shadow};
        border-radius: 20px;
      }
    }
  }

`;
