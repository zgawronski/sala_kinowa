import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${Colors.white};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
            -webkit-font-smoothing: antialiased;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
