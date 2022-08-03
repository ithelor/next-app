import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

interface ILabel {
  isActive?: boolean
}

export const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  grid-template-rows: 28px 1fr;

  grid-auto-flow: column;

  :last-of-type {
    > button {
      margin-left: 1rem;
    }
  }
`

export const Label = styled.label<ILabel>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;

  color: ${(props) => (props.isActive ? baseTheme.colors.text : baseTheme.colors.textInactive)};

  margin-bottom: 12px;

  transition: all ${baseTheme.animations.durations.short} ease-out;
`

export const Wrapper = styled.div`
  padding: 1rem 0;
  background-color: ${baseTheme.colors.light};

  :not(:last-of-type) {
    > div {
      border-right: 1px solid ${baseTheme.colors.borderDark};
    }
  }
`
