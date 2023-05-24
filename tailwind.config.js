/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rocket_blue_dark: '#7F94E2',
        rocket_blue_default: '#A6B6F1',
        rocket_blue_tint: '#E5E8FF',
        rocket_blue_light: '#EBF1FD',
        space_violet_dark: '#B28FEA',
        space_violet_default: '#CAB2F1',
        space_violet_tint: '#EEE5FF',
        space_violet_light: '#F5F1FF',
        accent: '#FFEEA3',
        neutral_700: '#363636',
        neutral_600: '#757575',
        neutral_500: '#9A9A9A',
        neutral_400: '#CDCDCD',
        neutral_300: '#E0E0E0',
        neutral_200: '#F0F0F0',
        neutral_100: '#F8F9FD',
      },
      backgroundImage: {
        banner_bg: "url('/images/banner/banner-bg.svg')",
        training_bg: "url('/images/aboutTraining/training-bg.svg')",
        training_bg_large: "url('/images/aboutTraining/training-bg-large.svg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '48px',
        lg: '72px',
      },
    },
    screens: {
      sm: '428px', // => @media (min-width: 428px) { ... }
      lg: '1280px', // => @media (min-width: 1280px) { ... }
      xl: '1440px', // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
