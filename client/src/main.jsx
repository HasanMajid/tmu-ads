import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './context/UserContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

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
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ChakraProvider>
  </QueryClientProvider>
)
