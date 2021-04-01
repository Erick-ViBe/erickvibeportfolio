import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'focus-visible/dist/focus-visible';
import { mode } from '@chakra-ui/theme-tools';
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Ubuntu, system-ui, sans-serif',
    heading: 'Ubuntu, system-ui, sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        //bg: mode('#b5d0da', '#464646')(props),
        bg: mode('#b5d0da', 'gray.800')(props),
      }
    })
  }
})

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
