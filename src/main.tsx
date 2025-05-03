import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/query-client.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
)
