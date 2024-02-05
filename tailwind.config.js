/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
   theme: {
      screens: {
         sm: '576px',
         md: '768px',
         lg: '992px',
         xl: '1216px',
      },
      fontFamily: {
         inter: ['var(--font-inter)', 'sans-serif'],
      },
      extend: {},
   },

   // add daisyUI plugin
   plugins: [require('daisyui')],

   // daisyUI config (optional)
   daisyui: {
      styled: true,
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#4B6BFB',
               'primary-content': '#FFFFFF',
               'primary-focus': '#405BD5',
               secondary: '#696A75',
               'secondary-focus': '#3B3C4A',
               'secondary-content': '#FFFFFF',
               accent: '#3CC288',
               'accent-focus': '#33A574',
               'accent-content': '#FFFFFF',
               neutral: '#181A2A',
               'neutral-focus': '#141624',
               'neutral-content': '#FFFFFF',
               'base-100': '#FFFFFF',
               'base-200': '#F1F5F9',
               'base-300': '#E2E8F0',
               'base-content': '#020617',
               info: '#181454',
               success: '#009485',
               warning: '#ff9900',
               error: '#ff5724',
            },
         },
         {
            dark: {
               ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
               primary: '#151B2F',
               'primary-content': '#FFFFFF',
               'primary-focus': '#080C1B',
               secondary: '#696A75',
               'secondary-focus': '#3B3C4A',
               'secondary-content': '#FFFFFF',
               accent: '#3CC288',
               'accent-focus': '#33A574',
               'accent-content': '#FFFFFF',
               neutral: '#181A2A',
               'neutral-focus': '#141624',
               'neutral-content': '#FFFFFF',
               'base-100': '#0B1126',
               'base-200': '#090E20',
               'base-300': '#080C1B',
               'base-content': '#FFFFFF',
               info: '#FFFFFF',
               success: '#009485',
               warning: '#ff9900',
               error: '#ff5724',
            },
         },
         'bumblebee',
         'emerald',
         'corporate',
         'synthwave',
         'retro',
         'cyberpunk',
         'valentine',
         'halloween',
         'garden',
         'forest',
         'aqua',
         'lofi',
         'pastel',
         'fantasy',
         'wireframe',
         'black',
         'luxury',
         'dracula',
         'cmyk',
         'autumn',
         'business',
         'acid',
         'lemonade',
         'night',
         'coffee',
         'winter',
      ],
      base: true,
      utils: true,
      logs: false,
      rtl: false,
      prefix: '',
      darkTheme: 'light',
   },
}