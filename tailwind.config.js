/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        customBg: 'rgb(240, 242, 245)', // Define your custom background color here
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#570df8',
          secondary: '#f000b8',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': 'rgb(240, 242, 245)', // Set custom background color for the theme
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
};
