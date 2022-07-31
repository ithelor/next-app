import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Link = styled.a`
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 17px;

  color: ${baseTheme.colors.text};

  &:hover {
    color: ${baseTheme.colors.primary};
  }
`
