import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const ViewUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & a {
    max-width: calc((100% - 20px) / 3);
    width: 100%;
    overflow: hidden;
    font-weight: bold;
    text-decoration: none;
    background: ${props => lighten(0.2, props.theme.colors.primary)};
    border-radius: 10px;
    box-shadow: 2px 2px 10px 0px ${props => props.theme.colors.shadow};
  }
`;

export const ItemLi = styled.li`
  height: 60px;
  width: 100%;
  background: ${props => props.color};
  color: #FFF;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: space-evenly;
  transition: all 0.4s;
  &:hover{
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
  }
  & a {}
`;
