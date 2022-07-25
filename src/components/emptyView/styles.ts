import styled from 'styled-components';

export const Empty = styled.div`
  background-color: #fff;
  justify-content: center !important;
  border-radius: 5px;
  height: 100px;
  line-height: 100px;
  color: #888;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0px 5px 10px 0px ${props => props.theme.colors.shadow};
`;