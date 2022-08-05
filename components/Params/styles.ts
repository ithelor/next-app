import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

import { IParams } from './Params'

interface IParamsStyled {
  variant?: IParams['variant']
}

export const Params = styled.span<IParamsStyled>`
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.2;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${baseTheme.colors.text};

  border-radius: 5px;
  padding: ${(props) => props.variant === 'editable' && '1.1rem'};

  background-color: ${(props) => props.variant === 'editable' && baseTheme.colors.light};
  box-shadow: ${(props) => props.variant !== 'default' && baseTheme.shadows.alt};

  button {
    display: flex;
    margin-left: 20px;
  }
`
