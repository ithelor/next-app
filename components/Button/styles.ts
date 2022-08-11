import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

import { IButtonLarge } from './Button'

export const ButtonIcon = styled.button`
  cursor: pointer;
  background: none;
`

export const ButtonLink = styled(ButtonIcon)`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -1px;

  color: ${baseTheme.colors.primary};
`

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
  box-shadow: ${baseTheme.shadows.contact};

  transition: all ${baseTheme.animations.durations.default};

  &:hover {
    color: ${baseTheme.colors.light};
    background-color: ${baseTheme.colors.primary};
  }
`

export const ButtonPrimary = styled(ButtonLight)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: ${baseTheme.sizes.buttons.large.padding};

  color: ${baseTheme.colors.light};
  background: ${baseTheme.colors.primary};
  box-shadow: ${baseTheme.shadows.primary};

  &:hover {
    background-color: ${baseTheme.colors.accent};
  }
`

// спустя 57 часов выяснилось, что где-то border-radius 3px, а где-то 5px 👍
interface IButtonLargeStyled {
  rounder?: IButtonLarge['rounder']
}

export const ButtonPrimaryLarge = styled(ButtonPrimary)<IButtonLargeStyled>`
  color: ${baseTheme.colors.light};
  background: ${baseTheme.colors.primary};

  border-radius: ${(props) => (props.rounder ? '5px' : '3px')};

  min-width: max-content;
  padding: ${baseTheme.sizes.buttons.large.padding};

  svg {
    margin-left: 1rem;
  }
`

export const ButtonOutlineWide = styled(ButtonPrimaryLarge)`
  color: ${baseTheme.colors.primary};
  background-color: transparent;
  border: 1.5px solid ${baseTheme.colors.primary};

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
