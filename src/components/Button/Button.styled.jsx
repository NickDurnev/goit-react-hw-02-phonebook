import styled from 'styled-components';

const Wrap = styled.button`
  padding: ${props => props.padding};
  color: ${props => props.theme.elementColor};
  background-color: ${props => props.theme.bgElementColor};
  transition: background-color ${props => props.theme.hoverTransition}
    ${props => props.theme.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.bgElementHoverColor};
  }
`;

export default Wrap;
