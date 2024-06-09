import React, {lazy, Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/appStore';

const App = () => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const data = {
            name: 'Garvita'
        }
        setUserName(data.name)
    }, [])

    return <div className="app">
        {/* Providing the store to the app */}
        <Provider store={store}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Header />
        <Outlet />
        </UserContext.Provider>
        </Provider>
    </div>
}

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />)