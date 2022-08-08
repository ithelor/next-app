export const baseTheme = {
  colors: {
    primary: '#5DAAFF',
    accent: '#2876CC',
    light: '#FFFFFF',
    lightAccent: '#F8FAFF',

    text: '#606F7A',
    textInactive: '#B7B7B7',

    borderLight: '#EBEBEB',
    borderDark: '#DEDEDE',
    borderSelect: '#E2E4EA',

    background: '#eff3f9',

    scroll: { accent: '#BDCBE0', background: '#8C8C8C26' }
  },

  shadows: {
    normal: '0px 4px 40px 0px #2E50571F',
    alt: '0px 4px 40px 0px #0000000A',
    button: '0px 4px 40px 0px #5DAAFF4A',
    contact: '0px 4px 40px 0px #2E50571F',
    primary: '0px 4px 40px 0px #00000026',
    input: '0px 4px 40px 0px #0000000f'
  },

  media: {
    small: '(max-width: 540px)',
    medium: '(max-width: 720px)',
    large: '(max-width: 960px)'
  },

  sizes: {
    header: {
      height: '149px',
      padding: {
        horizontal: '110px',
        vertical: '49px'
      }
    },

    buttons: {
      normal: {
        padding: '14px 22px',
        borderRadius: '3px'
      },
      large: {
        padding: '18px 28px',
        borderRadius: '3px'
      },
      wide: {
        padding: '19px 35px',
        borderRadius: '5px'
      }
    },

    select: {
      padding: '0 1.5rem',

      menu: {
        padding: '1.5rem'
      }
    }
  },

  animations: {
    durations: {
      short: '0.1s',
      shorter: '0.2s',
      default: '0.3s'
    }
  }
}
