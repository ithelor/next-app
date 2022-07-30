import styled from '@emotion/styled'

import ArrowRight from 'public/vector94.svg'
import ArrowRightShort from 'public/vector50.svg'

import { baseTheme } from 'styles/theme'

export const IconArrowRight = styled(ArrowRight)``
export const IconArrowRightShort = styled(ArrowRightShort)``

export const ButtonLight = styled.button`
  cursor: pointer;

  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.2px;

  padding: ${baseTheme.sizes.buttons.normal.padding};
  border-radius: ${baseTheme.sizes.buttons.normal.borderRadius};

  color: ${baseTheme.colors.text};
  background-color: ${baseTheme.colors.light};
  box-shadow: ${baseTheme.shadows.normal};

  transition: all 0.2s;

  &:hover,
  &:focus {
    color: ${baseTheme.colors.light};
    background-color: ${baseTheme.colors.primary};
  }
`

export const ButtonPrimary = styled(ButtonLight)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  color: ${baseTheme.colors.light};
  background: ${baseTheme.colors.primary};

  &:hover,
  &:focus {
    background-color: ${baseTheme.colors.accent};
  }
`

export const ButtonPrimaryWithIcon = styled(ButtonPrimary)`
  color: ${baseTheme.colors.light};
  background: ${baseTheme.colors.primary};

  padding: ${baseTheme.sizes.buttons.large.padding};

  svg {
    margin-left: 1rem;
  }
`

export const ButtonOutlineWithIcon = styled(ButtonPrimaryWithIcon)`
  color: ${baseTheme.colors.primary};
  background-color: transparent;
  border: 1.5px solid ${baseTheme.colors.primary};

  border-radius: ${baseTheme.sizes.buttons.wide.borderRadius};
  padding: ${baseTheme.sizes.buttons.wide.padding};

  &:hover,
  &:focus {
    color: ${baseTheme.colors.light};
    background-color: ${baseTheme.colors.primary};

    svg {
      stroke: ${baseTheme.colors.light};
    }
  }
`
