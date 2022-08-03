import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${baseTheme.sizes.header.padding.vertical} ${baseTheme.sizes.header.padding.horizontal};

  background-color: transparent;
`
