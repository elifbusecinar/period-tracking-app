/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'usertz-peach': '#FFBB94',
                'usertz-salmon': '#FB9590',
                'usertz-pink': '#DC586D',
                'usertz-magenta': '#A33757',
                'usertz-purple': '#852E4E',
                'usertz-dark': '#4C1D3D',
            }
        },
    },
    plugins: [],
}
