import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Link = styled.a`
  cursor: pointer;

  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -1px;

  color: ${baseTheme.colors.text};

  transition: color ${baseTheme.animations.durations.short} ease-in;

  &:hover {
    color: ${baseTheme.colors.primary};
  }
`
