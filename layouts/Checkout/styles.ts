import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Checkout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  padding: 0 ${baseTheme.sizes.header.padding.horizontal};

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -1px;

    color: ${baseTheme.colors.text};
  }
`

export const Controls = styled.span`
  position: absolute;
  right: ${baseTheme.sizes.header.padding.horizontal};
  bottom: 4rem;

  display: flex;
  gap: 1rem;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - ${baseTheme.sizes.header.height});
`
