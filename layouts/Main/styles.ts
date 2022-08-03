import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: calc(100vh - ${baseTheme.sizes.header.height});
  padding: 6rem ${baseTheme.sizes.header.padding.horizontal} 0;

  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position: -225px -50px;
  background-size: 150% 150%;

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 48px;
    letter-spacing: -1px;

    color: ${baseTheme.colors.text};
  }
`
