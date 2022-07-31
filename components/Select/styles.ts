import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

  color: ${baseTheme.colors.text};

  margin-bottom: 12px;
`

export const Select = styled.select`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

  width: fit-content;

  color: ${baseTheme.colors.text};
  background-color: ${baseTheme.colors.light};
  box-shadow: ${baseTheme.shadows.normal};

  padding: 1.5rem 1rem;
`
