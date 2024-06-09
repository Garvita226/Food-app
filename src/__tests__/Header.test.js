import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import store from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { expect, test } from '@jest/globals';

test('should render Header component with Login button', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole('button', {name: 'Login'})

    expect(button).toBeInTheDocument();
})

test('should change button name to Logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: 'Login'})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button', {name: 'Logout'})

    expect(logoutButton).toBeInTheDocument();
})

test('should render Header component with Login button', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();
})


