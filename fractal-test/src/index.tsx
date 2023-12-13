import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { extendTheme, ChakraBaseProvider } from "@chakra-ui/react";


const container = document.getElementById("root");
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })
root.render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);
