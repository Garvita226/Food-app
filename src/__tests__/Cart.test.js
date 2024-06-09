import { act } from "react"
import RestaurantMenu from "../components/RestaurantMenu"
import Header from "../components/Header"
import Cart from "../components/Cart"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from '../utils/appStore'
import { json } from "react-router-dom"
import MOCK_DATA from '../mocks/resMenu.json'
import "@testing-library/jest-dom"
import { expect, test } from '@jest/globals';
import { BrowserRouter } from "react-router-dom"

test('should load Restaurant Menu component', async () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA)
            }
        })
    })

    await act(async () => {
        render(
            <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu />
                <Cart/>
            </Provider>
            </BrowserRouter>)
    })

    const accordionHeader = screen.getByText('Recommended (20)')
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId('resItem').length).toBe(20);

    expect(screen.getByText('Cart (0 items)')).toBeInTheDocument()

    const addBtns = screen.getAllByRole('button', {name: 'Add +'})
    expect(addBtns.length).toBe(20)

    fireEvent.click(addBtns[0])
    expect(screen.getByText('Cart (1 items)')).toBeInTheDocument()

    fireEvent.click(addBtns[1])
    expect(screen.getByText('Cart (2 items)')).toBeInTheDocument()

    expect(screen.getAllByTestId('resItem').length).toBe(22)

    fireEvent.click(screen.getByRole('button', {name: 'Clear Cart'}))
    expect(screen.getAllByTestId('resItem').length).toBe(20)
})
