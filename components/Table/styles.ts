import styled from '@emotion/styled'

import { baseTheme } from 'styles/theme'

import { ITable } from './Table'

interface ITableStyled {
  sticky?: ITable['sticky']
  withTotal?: ITable['withTotal']
}

export const Table = styled.table((props: ITableStyled) => ({
  fontFamily: 'Open Sans, sans-serif',
  letterSpacing: '-1px',

  borderCollapse: 'separate',
  borderSpacing: 0,

  color: baseTheme.colors.text,

  tr: {
    td: {
      textAlign: 'center',
      overflow: 'hidden'
    }
  },

  thead: {
    position: props.sticky ? 'sticky' : 'static',
    top: 0,

    fontSize: '14px',
    fontWeight: 600,

    '::after': {
      content: '""',

      display: 'block',
      height: '1em'
    },

    tr: {
      td: {
        padding: '33px 1rem',

        /* ignore on first column */
        ':not(:first-of-type)': {
          border: `solid ${baseTheme.colors.borders.select}`,
          borderWidth: '1px 0 1px 1px',

          backgroundColor: baseTheme.colors.lightAccent
        },

        ':nth-of-type(2)': {
          borderRadius: '5px 0 0 5px'
        },

        ':last-of-type': {
          borderWidth: '1px',
          borderRadius: '0 5px 5px 0'
        }
      }
    }
  },

  tbody: {
    fontSize: '15px',
    fontWeight: 400,

    tr: {
      backgroundColor: baseTheme.colors.lightAccent,

      td: {
        border: `solid ${baseTheme.colors.borders.select}`,
        borderWidth: '1px 0 0 1px',

        ':last-of-type': {
          borderRightWidth: '1px'
        },

        /* unset product component border */
        '> div': {
          border: 'none'
        }
      },

      /* target first and last tds in the first tr */
      ':first-of-type': {
        '> :first-of-type': {
          borderRadius: '5px 0 0 0'
        },

        '> :last-of-type': {
          borderRadius: '0 5px 0 0'
        }
      },

      /* target first and last tds in the last tr */
      ':last-of-type': {
        td: {
          borderBottomWidth: '1px'
        },

        '> :first-of-type': {
          borderRadius: '0 0 0 5px'
        },

        '> :last-of-type': {
          borderRadius: '0 0 5px 0'
        }
      },

      /* target first and last tds in the only tr */
      ':only-of-type': {
        '> :first-of-type': {
          borderRadius: '5px 0 0 5px'
        },

        '> :last-of-type': {
          borderRadius: '0 5px 5px 0'
        }
      }
    }
  },

  tfoot: {
    fontSize: '15px',
    fontWeight: 600,

    marginBottom: '1rem',

    '::before': {
      content: '""',

      display: 'block',
      height: '1em'
    },

    tr: {
      td: {
        /* ignore on first column */
        ':not(:first-of-type)': {
          padding: '22px 2rem',
          border: `solid ${baseTheme.colors.borders.select}`,
          borderWidth: '1px 0 1px 1px',

          backgroundColor: baseTheme.colors.lightAccent
        },

        ':last-of-type': {
          borderWidth: '1px',
          borderRadius: '0 5px 5px 0'
        },

        span: {
          height: '100%',

          float: 'right',
          padding: '22px 2rem',
          border: `solid ${baseTheme.colors.borders.select}`,
          borderWidth: '1px 0 1px 1px',
          borderRadius: '5px 0 0 5px',

          backgroundColor: baseTheme.colors.lightAccent
        }
      }
    }
  },

  // полчаса переписывал на объекты ради этой строки 👩‍🎤
  [`@media ${baseTheme.media.large}`]: !props.withTotal && {
    thead: {
      display: 'none'
    },

    tbody: {
      tr: {
        ':first-of-type': {
          '> :first-of-type': {
            borderRadius: '5px 5px 0 0'
          },

          '> :last-of-type': {
            borderRadius: 0
          }
        },

        ':last-of-type': {
          '> :last-of-type': {
            borderRadius: '0 0 5px 5px'
          }
        },

        td: {
          minHeight: '30px',

          paddingLeft: '0.5rem',
          display: 'block',
          textAlign: 'center',

          border: `solid ${baseTheme.colors.borders.select}`,
          borderWidth: '0px 1px 0 1px',

          ':first-of-type': {
            borderTopWidth: '1px',

            '> div': {
              flexDirection: 'row-reverse'
            }
          },

          ':not(:last-of-type)': {
            borderBottomWidth: '1px'
          },

          ':last-of-type': {
            td: {
              borderBottomWidth: '1px'
            }
          },

          '::before': {
            content: 'attr(data-label)',

            fontWeight: 'bold',
            textTransform: 'uppercase',
            float: 'left',

            marginRight: '1rem'
          },

          '> div': {
            float: 'right'
          }
        }
      }
    }
  }
}))
