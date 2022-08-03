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
    background: '#eff3f9'
  },

  shadows: {
    normal: '0px 4px 40px 0px #2E50571F'
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
        horizontal: '97px',
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
      padding: '0.75rem 1.5rem',

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
