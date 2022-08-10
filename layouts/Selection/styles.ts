import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Selection = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 10%;

  padding: 0 ${baseTheme.sizes.header.padding.horizontal} 65px;

  .select,
  .fill {
    display: flex;
    flex-direction: column;

    h2,
    h3 {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      letter-spacing: -1px;
      text-align: left;

      color: ${baseTheme.colors.text};
    }

    h2 {
      font-size: 36px;

      margin-bottom: 42px;
    }

    h3 {
      font-size: 24px;

      text-align: center;
      margin-top: 10rem;
    }

    input {
      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }

  .select {
    flex: 0 1 50%;

    .scrollable {
      max-height: calc(100vh - ${baseTheme.sizes.header.height} - 185px);
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      gap: 4px;

      padding-right: 5px;
      margin-top: 58px;

      &::-webkit-scrollbar-track {
        background-color: ${baseTheme.colors.scroll.background};
      }

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background-color: ${baseTheme.colors.scroll.accent};
      }

      h3 {
        font-family: 'Open Sans', sans-serif;
        font-size: 24px;
        font-weight: 400;

        text-align: center;

        color: ${baseTheme.colors.text};
      }
    }
  }

  .fill {
    flex: 1 1 25%;

    .quantity {
      font-family: 'Open Sans', sans-serif;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.2px;

      color: ${baseTheme.colors.text};

      margin: 24px 0;

      .controls {
        display: inline-block;
        vertical-align: middle;

        margin-left: 2rem;

        background-color: ${baseTheme.colors.light};
        box-shadow: ${baseTheme.shadows.alt};

        button {
          width: 53px;
          height: 53px;
          padding: 19px;

          background-color: ${baseTheme.colors.light};

          svg {
            display: inline-block;
            vertical-align: middle;
          }
        }

        input {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.2px;
          text-align: center;

          width: 53px;
          height: 53px;
          vertical-align: middle;

          color: ${baseTheme.colors.text};
        }
      }
    }

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      width: max-content;

      input {
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.2px;

        width: 319px;
        padding: 19px;
        border-radius: 3px;

        color: ${baseTheme.colors.text};
        box-shadow: ${baseTheme.shadows.input};

        &::placeholder {
          color: ${baseTheme.colors.textInactive};
        }
      }
    }

    .buttons {
      margin-top: 36px;

      display: flex;
      gap: 1rem;
    }
  }
`
