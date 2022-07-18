import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  box-shadow: 0px 5px 10px 0px ${props => props.theme.colors.shadow};
`;

export const StyledLink = styled(Link)`
  color:  ${props => props.theme.colors.text};
  text-decoration: none;
`;