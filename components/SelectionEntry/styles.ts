import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

import { ISelectionEntry } from './SelectionEntry'

interface ISelectionEntryStyled {
  variant: ISelectionEntry['variant']
}

export const SelectionEntry = styled.div<ISelectionEntryStyled>`
  display: flex;
  align-items: center;

  width: ${(props) => props.variant === 'selected' && 'fit-content'};

  background-color: ${baseTheme.colors.lightAccent};
  border: 1px solid ${baseTheme.colors.borderSelect};
  border-radius: 3px;

  img {
    background-color: ${baseTheme.colors.light};
  }

  .title {
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -1px;

    color: ${baseTheme.colors.text};

    margin: 0 ${(props) => (props.variant === 'selected' ? '36px' : 'auto')} 0 36px;
  }

  button {
    margin: 27px;
  }
`
