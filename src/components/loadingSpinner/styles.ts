import styled, { keyframes } from 'styled-components';

export const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  justify-content: center;
  display: flex;
  width: 120px;
  &.maxSize {
    width: 100%;
  }

  & div{
  z-index: 10;
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid  ${props => props.theme.colors.primary}; /* Black */
  border-radius: 50%;
  animation: ${spinner} 0.8s linear infinite;}
`;
