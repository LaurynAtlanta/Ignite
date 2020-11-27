import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: yellow;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width:100%;
    }
    h2{
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.2rem;
        color: #333;
        padding: 1rem 0rem 0.8rem;
    }
    p{
        font-size: 0.9rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
`
export default GlobalStyles;