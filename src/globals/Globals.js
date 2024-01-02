import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-green: #7fbd28;
        --color-avocado: #bcbd28;
        --color-pale-red: #e57d28;
        --color-light-red: #e5b128;
        --color-light-grey: #dddddd;
    }

    *{
        font-family: ${props => props.theme.fontFamilyRegular}; 
     }

    html {
        color:  ${props => props.theme.color};
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    body {
        color:  ${props => props.theme.color};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${props => props.theme.background} !important; 
    }

    html, body {
        height: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
    }

    p, ul{
        font-size: xx-large;
        line-height: normal;
    }
    /* Style the scroll bars */

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
      }
  
      /* Track */
      ::-webkit-scrollbar-track {
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: white; 
        border-radius: 4px;
      }
  
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #e9ecef; 
      }
   
    @font-face {
        font-family: ${props => props.theme.fontFamilyRegular}; 
        src: url('../AsepriteFont.ttf'); 
    } 

    @font-face {
        font-family: ${props => props.theme.fontFamilyRegular}; 
        src: url('../AsepriteFont.ttf'); 
    } 

    a {
        font-weight: 600;
        text-decoration: none;
    }
  `
