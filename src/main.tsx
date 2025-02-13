import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './flags.css';
import {ToastProvider} from "./components/ToastProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PrimeReactProvider>
          <ToastProvider>
              <App />
          </ToastProvider>
      </PrimeReactProvider>
  </StrictMode>,
)
