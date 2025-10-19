import { render, screen, fireEvent } from '@testing-library/react'
import { Text } from './Text'

describe('Text Component', () => {
  it('renders without error', () => {
    expect(() => render(<Text variant="h1">Testing</Text>)).not.toThrow()
  })
})
