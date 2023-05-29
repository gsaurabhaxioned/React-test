import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body,#root {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
 
export default GlobalStyle;