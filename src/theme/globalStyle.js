import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ${'' /* background: #ebebeb; */}
    }

    main {
        min-height: 100vh;
    }

    .navbar {
        height: 80px;
    }

    .dropdown-toggle::after {
        display: none;
    }

    .carousel-indicators .active {
        background-color: #FCA311;
    }
`;

export default GlobalStyle;