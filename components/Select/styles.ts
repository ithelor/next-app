import ReactSelect from 'react-select'
import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

interface IContainer {
  width?: string
}

interface ISelect {
  isForDisplay?: boolean
}

export const Container = styled.div<IContainer>`
  width: ${(props) => props.width};

  /* :last-of-type {
    border-left: 1px solid ${baseTheme.colors.borderDark};
  } */
`

export const Select = styled(ReactSelect)<ISelect>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

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
      text-align: ${(props) => props.isForDisplay};

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

      &--is-focused {
        background-color: ${baseTheme.colors.lightAccent};
      }
    }
  }
`
