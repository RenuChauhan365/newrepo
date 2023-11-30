import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Products from './Products.jsx';
import Product from './Product.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/products/:productId',
        element: <Product />,
    },
]);

// here make the instance of the  Queryclient
    const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10000,
        },
    },
});


 

ReactDOM.createRoot(document.getElementById('root')).render(

    // we wrap the all app in queryClient

    <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />

{/*  this is  for the react devtools */}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
