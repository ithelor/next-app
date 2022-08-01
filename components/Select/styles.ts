import ReactSelect from 'react-select'
import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

interface IContainer {
  width: string
}

export const Container = styled.div<IContainer>`
  width: ${(props) => props.width};

  border-left: 1px solid ${baseTheme.colors.borderDark};
`

export const Select = styled(ReactSelect)`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

  color: ${baseTheme.colors.text};

  .Select {
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
      text-align: center;

      color: ${baseTheme.colors.text};
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
        text-align: center;
        padding: 0;
      }
    }

    &__option {
      padding: ${baseTheme.sizes.select.padding};
      border-top: 1px solid ${baseTheme.colors.borderLight};

      &--is-focused {
        background-color: ${baseTheme.colors.lightAccent};
      }
    }
  }
`
