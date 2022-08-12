import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${baseTheme.sizes.header.height};
  padding: ${baseTheme.sizes.header.padding.vertical} 10%;

  background-color: transparent;
`

export const LeftContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 3rem;

  svg {
    cursor: pointer;
  }

  @media ${baseTheme.media.large} {
    > span {
      display: none;
    }
  }

  @media ${baseTheme.media.medium} {
    > a {
      display: none;
    }
  }
`
