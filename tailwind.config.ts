import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'poppins-light': ['Poppins Light', 'sans-serif'],
        'poppins-regular': ['Poppins Regular', 'sans-serif'],
        'poppins-medium': ['Poppins Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins Semibold', 'sans-serif'],
        'poppins-bold': ['Poppins Bold', 'sans-serif'],
      },
      boxShadow: {
        'custom-black': '4px 4px 0px black', // Customize the shadow here
      },
    },
  },
  plugins: [],
};
export default config;
