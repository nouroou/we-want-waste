/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-hover': 'var(--color-primary-hover)',
                'primary-light': 'var(--color-primary-light)',
                'primary-text': 'var(--color-primary-text)',
                'text-base': 'var(--color-text-base)',
                'text-muted': 'var(--color-text-muted)',
                'text-heading': 'var(--color-text-heading)',
                'text-inverted': 'var(--color-text-inverted)',
                'bg-base': 'var(--color-bg-base)',
                'bg-card': 'var(--color-bg-card)',
                'bg-card-selected': 'var(--color-bg-card-selected)',
                'bg-disabled': 'var(--color-bg-disabled)',
                'border-color': 'var(--border-color)',
                'border-color-focus': 'var(--border-color-focus)',
            },
        },
    },

    plugins: [],
}