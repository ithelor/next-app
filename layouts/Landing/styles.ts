import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Landing = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: calc(100vh - ${baseTheme.sizes.header.height});
  padding: 0 ${baseTheme.sizes.header.padding.horizontal} 0;

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

    margin-bottom: 6rem;
  }
`

export const Container = styled.section`
  position: relative;
  bottom: 10%;
`
