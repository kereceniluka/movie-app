import { createGlobalStyle } from 'styled-components/macro';
import sizes from '../utils/responsive';

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
    }

    main {
        max-width: 100vw;
        min-height: 100vh;
    }

    .navbar {
        height: 80px;
    }

    .dropdown-toggle::after {
        display: none;
    }

    .navbar-collapse {
        background: #fff;
    }

    #basic-navbar-nav {
        padding: 20px;

        ${sizes.desktop} {
            padding: 0;
        }
    }

    #basic-navbar-nav > div:nth-child(2) {
        margin-top: 15px;

        ${sizes.desktop} {
            margin-top: 0;
        }
    }

    #basic-navbar-nav > div.mr-auto.d-sm-flex.align-items-center.navbar-nav {
        margin-left: 0;

        ${sizes.desktop} {
            margin-left: 70px;
        }
    }

    .carousel-indicators .active {
        background-color: #FCA311;
    }
`;

export default GlobalStyle;