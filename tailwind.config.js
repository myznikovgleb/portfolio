/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#ffffff',
          'primary-content': '#ffffff',
          secondary: '#ffd6ed',
          'secondary-focus': '#ffbddf',
          'secondary-content': '#ffffff',
          accent: '#1dcdbc',
          neutral: '#2b3440',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      },
      {
        dark: {
          primary: '#ffffff',
          'primary-content': '#ffffff',
          secondary: '#4b5563',
          'secondary-focus': '#425063',
          'secondary-content': '#ffffff',
          accent: '#1dcdbc',
          neutral: '#2b3440',
          'base-100': '#374151',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
