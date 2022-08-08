import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Search = styled.div`
  height: 53px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.2;

    height: 100%;
    width: 370px;
    padding: 1.5rem;
    border-radius: 3px;

    box-shadow: ${baseTheme.shadows.input};

    &::placeholder {
      color: ${baseTheme.colors.textInactive};
    }
  }

  button {
    height: 100%;
  }
`
