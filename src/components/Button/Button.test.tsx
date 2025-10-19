import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

const mockOnClick = jest.fn()

describe('Button Component', () => {
  it('renders without error', () => {
    expect(() =>
      render(<Button onClick={mockOnClick}>Click me</Button>)
    ).not.toThrow()
  })

  it('renders button with text', () => {
    render(<Button onClick={mockOnClick}>Click me</Button>)
    expect(screen.getByText(/Click me/i)).toBeInTheDocument()
  })

  it('fires click event', () => {
    render(<Button onClick={mockOnClick}>Click me</Button>)
    fireEvent.click(screen.getByText(/Click me/i))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
