import {
  ChakraProvider
} from "@chakra-ui/react"
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import store from "./store";
import "./index.css"
import {theme} from './theme/theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ChakraProvider>
)
