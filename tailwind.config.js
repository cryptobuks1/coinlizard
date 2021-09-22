module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'],
    mode: 'jit',
    darkMode: 'media',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                primary: '#8dc647',
                dark: '#121212'
            }
        },
        textColor: {
            primary: '#8dc647',
            danger: '#e15241'
        },
        borderColor: (theme) => ({
            ...theme('colors'),
            primary: '#8dc647',
            DEFAULT: '#636363'
        }),
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif']
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
