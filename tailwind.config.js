const plugin = require('tailwindcss/plugin');

const greenColor = '#18A87C';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      none: 'transparent',
      black: '#202020',
      green: greenColor,
      deepGreen: '#148F69',
      gray: {
        400: '#9ca3af',
        DEFAULT: '#757575',
      },
      yellow: '#FBCD05',
      red: '#FF4A32',
      'light-green': '#1DC895',
      'light-gray': '#D6D6D6',
      white: '#FFFFFF',
      snow: '#F9F9F9',
      mintcream: '#F0FDF9',
      aquamarine: '#F4FAFA',
      'aquamarine-light': '#EAF0F0',
      darkaquamarine: '#C2F6E6',

      /** * star color ** */
      mediumseagreen: '#18A97D',
      yellowgreen: '#7AC143',
      coral: '#F5842D',
      gold: '#FCCE08',
      orangered: '#EF3F28',
      success: '#1FC253',
      danger: '#FF4A32',
      warning: '#FBCD05',
      lightsuccess: '#DFF4E9',
      lightdanger: '#F5E8E6',
      lightwarning: '#F5F5E1',
    },
    fontFamily: {
      maven: ['Maven Pro', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
    customForms: (theme) => ({
      default: {
        radio: {
          icon: `<svg fill={${greenColor}} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
        },
      },
    }),
    extend: {
      height: {
        3.75: '0.938rem',
        8.5: '2.125rem', // 34px
        15: '3.75rem', // 60px
        76: '18.75rem', // 300px
      },
      width: {
        3.75: '0.938rem',
        8.5: '2.125rem', // 34px
        15: '3.75rem', // 60px
        30: '7.5rem', // 120px
        55: '13.75rem', // 220px
        70: '17.5rem', // 280px
        76: '18.75rem', // 300px
        100: '25rem', // 400px
      },
      margin: {
        1.25: '0.313rem',
        3.75: '0.938rem',
        7.5: '1.875rem',
        15: '3.75rem', // 60px
      },
      padding: {
        1.25: '0.313rem', // 5px
        3.25: '0.8125rem', // 13px
        3.75: '0.938rem', // 15px
        4.5: '1.125rem', // 18px
        6.25: '1.5625rem', // 25px
        7.5: '1.875rem', // 30px
        15: '3.75rem', // 60px
        19.5: '4.875rem', // 78px
      },
      spacing: {
        7.5: '1.875rem',
      },
      boxShadow: {
        shadow: '4px 4px 15px rgba(49, 49, 49, 0.04)',
      },
      borderRadius: {
        rounded: '0.25rem',
        '2lg': '0.625rem',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      borderWidth: {
        0.5: '0.5px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.maven'),
          fontSize: '2rem',
          fontWeight: '600',
          fontColor: theme('colors.black'),
          lineHeight: '2.375rem',
          letterSpacing: '0em',
        },
        h2: {
          fontFamily: theme('fontFamily.maven'),
          fontSize: '1.75rem',
          fontWeight: '600',
          lineHeight: '2.063rem',
          letterSpacing: '0em',
        },
        h3: {
          fontFamily: theme('fontFamily.maven'),
          fontSize: '1.5rem',
          fontWeight: '600',
          lineHeight: '1.75rem',
          letterSpacing: '0em',
        },
        h4: {
          fontFamily: theme('fontFamily.maven'),
          fontSize: '1.25rem',
          fontWeight: '600',
          lineHeight: '1.5rem',
          letterSpacing: '0.01em',
        },
        h5: {
          fontFamily: theme('fontFamily.maven'),
          fontSize: '1rem',
          fontWeight: '500',
          lineHeight: '1.188rem',
          letterSpacing: '0.01em',
        },
        h6: {
          fontFamily: theme('fontFamily.maven'),
          fontSize: '0.875rem',
          fontWeight: '500',
          lineHeight: '1rem',
          letterSpacing: '0.005em',
        },
        p: {
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          color: theme('colors.gray'),
        },
      });
      addComponents({
        '.card': {
          borderRadius: theme('borderRadius.2lg'),
          padding: theme('padding.5'),
        },
        '.icon': {
          height: '1rem',
          width: '1rem',
        },
      });
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      });
    }),
  ],
};
