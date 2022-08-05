import styled from '@emotion/styled'

import { ISelect } from 'components/Select/Select'

import { baseTheme } from 'styles/theme'

export const Container = styled.div`
  display: flex;
  align-content: center;

  gap: 1rem;
`

interface IControlsStyled {
  variant: ISelect['variant']
}

export const Controls = styled.fieldset<IControlsStyled>`
  display: grid;
  align-items: center;
  width: min-content;

  grid-template-columns: repeat(4, min-content);
  grid-template-rows: ${(props) => props.variant === 'default' && 0} 1fr;
  grid-auto-flow: row;

  background-color: ${baseTheme.colors.light};
  box-shadow: ${baseTheme.shadows.alt};

  border-radius: ${(props) => (props.variant === 'default' ? '3px' : '5px')};
`

interface ILabel {
  isActive?: boolean
}

export const Label = styled.label<ILabel>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.2px;

  position: relative;
  bottom: 2rem;

  padding-left: 0.3rem;

  color: ${(props) => (props.isActive ? baseTheme.colors.text : baseTheme.colors.textInactive)};

  transition: all ${baseTheme.animations.durations.short} ease-out;
`

interface IWrapperStyled {
  variant: ISelect['variant']
}

export const Wrapper = styled.div<IWrapperStyled>`
  padding: ${(props) => (props.variant === 'default' ? '0.7rem' : '0.5rem')} 0;

  background-color: ${baseTheme.colors.light};

  :first-of-type {
    border-radius: ${(props) => (props.variant === 'default' ? '3px 0 0 3px' : '5px 0 0 5px')};
  }

  :last-of-type {
    border-radius: ${(props) => (props.variant === 'default' ? '0 3px 3px 0' : '0 5px 5px 0')};

    > button {
      display: flex;
      margin: 0 1rem;
    }
  }

  :not(:last-of-type) {
    > div {
      border-right: 1px solid ${baseTheme.colors.borderDark};
    }
  }
`
