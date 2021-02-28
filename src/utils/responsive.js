const breakpoints = {
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1200,
}

const sizes = {
    'mobile': `@media screen and (min-width: ${breakpoints.sm}px)`,
    'tablet': `@media screen and (min-width: ${breakpoints.md}px)`, 
    'desktop': `@media screen and (min-width: ${breakpoints.lg}px)`, 
    'largeDesktop': `@media screen and (min-width: ${breakpoints.xl}px)`, 
}

export default sizes;
