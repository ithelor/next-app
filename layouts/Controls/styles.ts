import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

  color: ${baseTheme.colors.textInactive};

  margin-bottom: 12px;
`

export const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-template-rows: 28px 1fr;

  grid-auto-flow: row;

  :last-of-type {
    > button {
      margin-left: 1rem;
    }
  }
`

export const Wrapper = styled.div`
  padding: 1rem 0;
  background-color: ${baseTheme.colors.light};

  :not(:last-of-type) {
    > div {
      border-right: 1px solid ${baseTheme.colors.borderDark};
    }
  }
`
