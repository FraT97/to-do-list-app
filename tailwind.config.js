/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{html,jsx,js,ts,tsx}', // Include js, ts and tsx just in case
      './components/**/*.{html,jsx,js,ts,tsx}',
      './index.html',
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#ffffff', // Important to add this
        'black': '#000000' // Important to add this
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        gridTemplateColumns: {
          '16': 'repeat(16, minmax(0, 1fr))',
          'footer': '200px minmax(900px, 1fr) 100px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwindcss-animate'),
      require('@tailwindcss/typography')
    ],
  }