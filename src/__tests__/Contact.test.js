import { render, screen } from "@testing-library/react"
import { expect, test } from '@jest/globals';
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe('Contact Us Page Test Cases', () => {
  test('should load Contact Us component', () => {
    // Render
    render(<Contact />)

    // Querying
    const heading = screen.getByRole("heading")

    // Assertion
    expect(heading).toBeInTheDocument();
  })

  test('should load buttton in the Contact component', () => {
    render(<Contact />)

    const button = screen.getByText('Submit')

    expect(button).toBeInTheDocument();
  })

  it('should load 2 input boxes in the Contact component', () => {
    render(<Contact />)

    const inputBoxes = screen.getAllByRole('textbox')

    expect(inputBoxes.length).toBe(2)
  })

  it('should load name input box in Contact compoent', () => {
    render(<Contact />)

    const inputName = screen.getByPlaceholderText('Name')

    expect(inputName).toBeInTheDocument()
  })
})



