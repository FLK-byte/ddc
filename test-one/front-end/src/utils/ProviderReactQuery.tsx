"use client"
import {ReactNode} from 'React'
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()
export  function ProviderReactQuery({children}: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
