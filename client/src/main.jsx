import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './context/UserContext.jsx'

// 1. Using a style object
const theme = extendTheme({
  styles: {
    global: {
      'main': {
        marginInline: "2rem"
      },
      a: {
        color: 'teal.500',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ChakraProvider>
)
