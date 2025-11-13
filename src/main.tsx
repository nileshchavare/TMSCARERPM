import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { theme } from './utils/theme.ts'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store} >
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
