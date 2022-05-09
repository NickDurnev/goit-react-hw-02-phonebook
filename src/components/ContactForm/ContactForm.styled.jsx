import styled from 'styled-components';

export const Form = styled.form`
  max-width: 300px;
  padding: 20px;
  background-color: ${props => props.theme.bgColor};
`;

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.textColor};
  text-align: center;

  & > input {
    display: block;
    width: 100%;
  }

  & + & {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.buttonColor};
  background-color: ${props => props.theme.bgButtonColor};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.bgButtonHoverColor};
  }
`;
