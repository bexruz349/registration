import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
`;

interface SInterfaceProps{
    $isError?: boolean;
}

export const StyleInput = styled.input<SInterfaceProps>`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  background-color: transparent;

  &:last-child {
    margin-bottom: 40px;
  }

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
  
  outline: 0;
  font-family: inherit;
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
    `}

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
