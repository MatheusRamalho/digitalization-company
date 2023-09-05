/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-50': '#FEA081',
                'primary-100': '#FE9674',
                'primary-200': '#FE8C66',
                'primary-300': '#FE8157',
                'primary-400': '#FE7446',
                'primary-500': '#FE6634',
                'primary-600': '#FE5720',
                'primary-700': '#F94B11',
                'primary-800': '#F43E01',
                'primary-900': '#DE3801',
            },
        },
    },
    plugins: [],
}
