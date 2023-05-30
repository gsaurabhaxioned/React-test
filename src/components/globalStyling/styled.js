import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,#root {
    min-height: 100vh; 
    display: flex; 
    flex-direction: column; 
    margin: 0;
    padding: 0;
    background-color: #2f4f4f;
  }

  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    &.disable-scroll {
    overflow: hidden;
    pointer-events: none;
    }
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
