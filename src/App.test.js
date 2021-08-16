import { render, screen } from '@testing-library/react'
import App from './App'

test('Render de la App principal', () => {
  render(<App />)
  const title = screen.getByText(/Una galeria más/i)
  expect(title).toBeInTheDocument()
})
