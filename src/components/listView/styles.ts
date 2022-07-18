import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const ViewUl = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;

  & a {
    overflow: hidden;
    text-decoration: none;
    font-weight: bold;
    background: ${props => lighten(0.2, props.theme.colors.primary)};
  }

  & a:first-child{
    border-radius: 10px 10px 0 0;
    
  }
  & a:last-child{
    border-radius: 0 0 10px 10px;
  }

  & a:nth-child(even){
    background: ${props => lighten(0.15, props.theme.colors.primary)};
  }
`;

export const ItemLi = styled.li`
  height: 60px;
  width: 100%;
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  transition: all 0.4s;

  
  &:hover{
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
  }
`;
