import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../components/pages/Home'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByTestId('home')
  expect(linkElement).toBeInTheDocument()
})
