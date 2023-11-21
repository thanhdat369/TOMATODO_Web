/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        MainColor: '#FD6D64',
        Secondary: '#3EB06C',
        BackgroundColor: '#000000',
        LightColor: '#FFFFFF',
        MainColorHover: '#378AA5',
        None: '#D9D9D9'
      }
    },
  },
  plugins: [],
}

