import ReactSelect from 'react-select'
import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

import { ISelect } from './Select'

interface IContainerStyled {
  width?: ISelect['width']
}

export const Container = styled.div<IContainerStyled>`
  min-width: ${(props) => props.width};
  width: max-content;
`

interface ISelectStyled {
  isForDisplay?: ISelect['isForDisplay']
  variant?: ISelect['variant']
  isOptionsCentered?: ISelect['isOptionsCentered']
}

export const Select = styled(ReactSelect)<ISelectStyled>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

  padding: ${(props) => props.variant === 'default' && '0.6rem 0'};

  color: ${baseTheme.colors.text};

  .react-select {
    &__input-container {
      color: ${baseTheme.colors.text};
    }

    &__value-container {
      padding: 0;
    }

    &__control {
      display: flex;
      justify-content: center;

      border: none;
      border-radius: 3px 3px 0 0;
      padding: ${baseTheme.sizes.select.padding};

      background-color: ${baseTheme.colors.light};
      box-shadow: none;

      z-index: 2;
    }

    &__single-value {
      text-align: ${(props) => props.isForDisplay && 'center'};

      color: ${(props) =>
        props.isForDisplay ? baseTheme.colors.textInactive : baseTheme.colors.text};
    }

    &__indicator-separator {
      display: none;
    }

    &__indicator {
    }

    &__menu {
      margin: 0;
      border-radius: 0 0 3px 3px;

      box-shadow: ${baseTheme.shadows.normal};

      overflow: hidden;

      &-list {
        padding: 0;
      }
    }

    &__option {
      padding: ${baseTheme.sizes.select.menu.padding};
      border-top: 1px solid ${baseTheme.colors.borderLight};
      text-align: ${(props) => props.isOptionsCentered && 'center'};

      &--is-focused {
        background-color: ${baseTheme.colors.lightAccent};
      }
    }
  }
`
