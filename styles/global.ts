import { css } from '@emotion/react'

import { baseTheme } from './theme'

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@400;500;600');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
  }

  html {
    font-size: 14px;
  }

  body {
    background-color: ${baseTheme.colors.background};
  }
`

