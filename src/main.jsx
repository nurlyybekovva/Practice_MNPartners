import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import appStore from './stores/appStore';
import StoreContext from './stores/StoreContext';
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContext.Provider value={{ appStore }}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StoreContext.Provider>
  </StrictMode>
)