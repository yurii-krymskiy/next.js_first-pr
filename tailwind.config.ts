import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        '96B6C5': '#96B6C5',
        'ADC4CE': '#ADC4CE',
        'EEE0C9': '#EEE0C9',
        'F1F0E8': '#F1F0E8',
      },
      textColor: {
        '96B6C5': '#96B6C5',
      },
    },
  },
  plugins: [],
}
export default config
