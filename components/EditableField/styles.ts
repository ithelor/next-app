import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

interface DisplayFieldStyled {
  isEditing: boolean
}

export const DisplayField = styled.td<DisplayFieldStyled>`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -1px;

  height: 1px;

  color: ${baseTheme.colors.text};

  white-space: nowrap;

  :hover {
    svg {
      opacity: 1;
    }
  }

  input {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -1px;

    color: ${baseTheme.colors.text};

    width: ${(props) => props.isEditing && '80px'};
    height: 100%;
    text-align: center;

    background-color: ${baseTheme.colors.lightAccent};

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    margin-left: ${(props) => !props.isEditing && '36px'};
  }

  svg {
    cursor: pointer;
    width: 16px;
    height: 16px;

    opacity: 0;
    margin-left: 20px;
  }
`
