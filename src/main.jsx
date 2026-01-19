import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { LanguageProvider } from '@/contexts'
import { antdTheme } from '@/constants'
import App from './App'
import '@/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ConfigProvider theme={antdTheme}>
        <App />
      </ConfigProvider>
    </LanguageProvider>
  </StrictMode>
)
