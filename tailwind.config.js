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
          secondary: '#ffcce6',
          'secondary-focus': '#ffb3da',
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
          primary: '#ffcce6',
          'primary-content': '#ffffff',
          secondary: '#ffcce6',
          'secondary-focus': '#ffb3da',
          'secondary-content': '#ffffff',
          accent: '#1dcdbc',
          neutral: '#2b3440',
          'base-100': '#ffffff',
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
