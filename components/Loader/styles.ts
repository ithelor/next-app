import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Loader = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.2px;

  color: ${baseTheme.colors.text};

  display: flex;
  align-items: center;
`
