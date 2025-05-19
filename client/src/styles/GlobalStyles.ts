import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --text-color: #e0e0e0;
    --text-muted: #a0a0a0;
    --purple-primary:  #7e57c2;
    --purple-secondary: #e1bee7;
    --purple-lighter: #f3e5f5;
    --gray-primary: #b3b3b3;
    --red-primary: #A91101;
    --red-secondary: #FF003F;

    --font-family: "Inter", sans-serif;

     --border: 1px solid #505050;

    --transition: background-color 0.2s ease, color 0.2s ease
}

body {
    font-family: "Inter", sans-serif;
    transition: color 0.3s, background-color 0.3s;
}


`;

export default GlobalStyles;
