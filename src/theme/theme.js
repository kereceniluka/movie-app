export const lightTheme = {
    
}

export default {
    fonts: {
        main: 'Source Sans Pro, sans-serif',
    },
    colors: {
        bgColors: {
            primary: '#fca311',
        },
        fontColors: {
            text: '#565360',
            label: '#908e9b',
            disabled: '#e1dfe9',
        },
    },
    breakpoints: {
        mobile: '@media screen and (min-width: 576px)',
        tablet: '@media screen and (min-width: 768px)', 
        desktop: '@media screen and (min-width: 992px)', 
        largeDesktop: '@media screen and (min-width: 1200px)',
    },
    spacings: {
        // Calculation based on a root font-size of 16px
        xxSmall: '.25rem',   // 4px
        xSmall: '.5rem',     // 8px
        small: '.75rem',     // 12px
        medium: '1rem',      // 16px
        xMedium: '1.25rem',  // 20px
        xxMedium: '1.5rem',  // 24px
        large: '2rem',       // 32px
        xLarge: '3rem',      // 48px
        xxLarge: '4rem',     //64px
    },
    animations: {},
    shadows: {},
}