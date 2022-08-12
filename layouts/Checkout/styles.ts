import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

import { IControls } from './Checkout'

interface ICheckoutStyled {
  isFinal: boolean
}

export const Checkout = styled.main<ICheckoutStyled>`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  padding: 0 10%;
  margin-bottom: ${(props) => props.isFinal && '3.4rem'};

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -1px;

    color: ${baseTheme.colors.text};
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - ${baseTheme.sizes.header.height});
`

export const Scrollable = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - ${baseTheme.sizes.header.height} - 87px);
  overflow-y: auto;
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

  @media ${baseTheme.media.large} {
    /* max-height: calc(100vh - ${baseTheme.sizes.header.height} - 210px); */
  }
`

interface IControlsStyled {
  variant?: IControls['variant']
  isFinal?: IControls['isFinal']
  isTooLarge?: IControls['isTooLarge']
}

export const Controls = styled.span<IControlsStyled>`
  position: ${(props) => props.variant === 'absolute' && 'absolute'};
  right: 15%;
  bottom: 5%;

  display: flex;
  gap: 1rem;

  margin-left: auto;

  @media ${baseTheme.media.large} {
    width: ${(props) => !props.isFinal && '400px'};

    flex-direction: ${(props) => props.isTooLarge && 'column'};

    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 1rem;
    text-align: center;
  }

  @media ${baseTheme.media.small} {
    position: static;
    flex-direction: column;

    width: auto;
    margin-bottom: 2rem;
  }
`

export const Total = styled.div`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.2px;

  display: flex;
  gap: 3rem;
  margin-left: auto;

  color: ${baseTheme.colors.text};

  .labels,
  .costs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .labels {
    h3,
    h2 {
      text-align: right;
    }

    h3 + h2 {
      margin-top: 1rem;
    }

    h3 {
      font-size: 23px;
      font-weight: 400;
    }

    h2 {
      font-size: 31px;
      font-weight: 600;
    }
  }

  .costs {
    text-align: right;
    font-size: 23px;
    font-weight: 400;

    span {
      :last-of-type {
        font-size: 31px;
        font-weight: 600;

        margin-top: 1rem;
      }
    }
  }

  @media ${baseTheme.media.large} {
    margin-right: auto;

    .costs {
      text-align: left;
    }
  }
`
