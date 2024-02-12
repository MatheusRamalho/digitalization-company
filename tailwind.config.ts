import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'orange-50': '#FEA081',
                'orange-100': '#FE9674',
                'orange-200': '#FE8C66',
                'orange-300': '#FE8157',
                'orange-400': '#FE7446',
                'orange-500': '#FE6634',
                'orange-600': '#FE5720',
                'orange-700': '#F94B11',
                'orange-800': '#F43E01',
                'orange-900': '#DE3801',

                'gray-50': '#E6E6EA',
                'gray-100': '#E4E4E8',
                'gray-200': '#e1e1e6',
                'gray-300': '#c4c4cc',
                'gray-400': '#7c7c8a',
                'gray-500': '#323238',
                'gray-600': '#29292e',
                'gray-700': '#202024',
                'gray-800': '#121214',
                'gray-900': '#101012',
                'gray-950': '#0F0F10',
            },
        },
    },
    plugins: [],
}

export default config
