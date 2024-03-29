module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'],
    mode: 'jit',
    darkMode: 'media',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1300px',
            mobile: { max: '780px' }
        },
        extend: {
            colors: {
                primary: '#8dc647',
                dark: '#121212',
                tableGray: '#9b9b9b'
            }
        },
        textColor: {
            primary: '#8dc647',
            danger: '#e15241'
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            dark: '#121212',
            tableGray: '#343a40'
        }),
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
