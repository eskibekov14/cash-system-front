import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {OrderProvider} from "./context/OrderContext.tsx";
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <OrderProvider>
            <App/>
        </OrderProvider>
    </QueryClientProvider>
)
