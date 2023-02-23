import { createGlobalStyle } from "styled-components";


const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body #root {
        height: 100%;
    }

    body {
        background-color: white;
        font-family: 'Poppins', sans-serif;
    }

    button {
        background-color: transparent;
        outline: none;
        border: none;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
    }
    
`

export default globalStyle