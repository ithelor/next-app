import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

export const Table = styled.table`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: -1px;

  border-collapse: separate;
  border-spacing: 0;

  color: ${baseTheme.colors.text};

  tr {
    td {
      text-align: center;
    }
  }

  thead {
    font-size: 14px;
    font-weight: 600;

    margin-bottom: 1rem;

    ::after {
      content: '';

      display: block;
      height: 1em;
    }

    tr {
      td {
        padding: 22px 2rem;

        /* ignore on first column */
        :not(:first-of-type) {
          border: solid ${baseTheme.colors.borderSelect};
          border-width: 1px 0 1px 1px;

          background-color: ${baseTheme.colors.lightAccent};
        }

        :nth-of-type(2) {
          border-radius: 5px 0 0 5px;
        }

        :last-of-type {
          border-width: 1px;
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }

  tbody {
    font-size: 15px;
    font-weight: 400;

    tr {
      background-color: ${baseTheme.colors.lightAccent};

      td {
        border: solid ${baseTheme.colors.borderSelect};
        border-width: 1px 0 0 1px;

        overflow: hidden;

        :last-of-type {
          border-right-width: 1px;
        }

        /* unset product component border */
        > div {
          border: none;
        }
      }

      /* target first and last tds in the first tr */
      :first-of-type {
        > :first-of-type {
          border-radius: 5px 0 0 0;
        }

        > :last-of-type {
          border-radius: 0 5px 0 0;
        }
      }

      /* target first and last tds in the last tr */
      :last-of-type {
        td {
          border-bottom-width: 1px;
        }

        > :first-of-type {
          border-radius: 0 0 0 5px;
        }

        > :last-of-type {
          border-radius: 0 0 5px 0;
        }
      }

      /* target first and last tds in the only tr */
      :only-of-type {
        > :first-of-type {
          border-radius: 5px 0 0 5px;
        }

        > :last-of-type {
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }
`
