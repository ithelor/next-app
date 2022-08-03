import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

interface ILabel {
  isActive?: boolean
}

export const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  grid-template-rows: calc(15px + 16px) 1fr;

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
  letter-spacing: 0.2px;

  padding-left: 0.3rem;

  color: ${(props) => (props.isActive ? baseTheme.colors.text : baseTheme.colors.textInactive)};

  transition: all ${baseTheme.animations.durations.short} ease-out;
`

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  background-color: ${baseTheme.colors.light};

  :first-of-type {
    border-radius: 3px 0 0 3px;
  }

  :last-of-type {
    border-radius: 0 3px 3px 0;
  }

  :not(:last-of-type) {
    > div {
      border-right: 1px solid ${baseTheme.colors.borderDark};
    }
  }
`
