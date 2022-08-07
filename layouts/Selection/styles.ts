import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Selection = styled.main`
  display: flex;
  gap: 10rem;

  padding: 0 ${baseTheme.sizes.header.padding.horizontal};

  section {
    display: flex;
    flex-direction: column;
    gap: 42px;

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
    }

    h3 {
      font-size: 24px;

      text-align: center;
      margin-top: 10rem;
    }

    .scrollable {
      max-height: calc(100vh - ${baseTheme.sizes.header.height} - 275px);
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      gap: 4px;

      padding-right: 5px;

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

    span {
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }
`
