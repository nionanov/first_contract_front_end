import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
// main.tsx
import { Buffer } from "buffer";

// Make Buffer available globally for @ton/core
if (!(window as any).Buffer) {
  (window as any).Buffer = Buffer;
}

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://nionanov.github.io/first_contract_front_end/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,  
)
