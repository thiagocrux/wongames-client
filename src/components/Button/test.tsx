import { screen } from '@testing-library/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'

import Button from '.'
import { renderWithTheme } from '@/utils/tests/helper'

describe('<Button />', () => {
  it('should render a medium button if no size prop is passed', () => {
    const { container } = renderWithTheme(<Button>Lorem Ipsum</Button>)

    expect(screen.getByRole('button', { name: /Lorem Ipsum/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a small button if the size prop is equal to "small"', () => {
    renderWithTheme(<Button size="small">Lorem Ipsum</Button>)

    expect(screen.getByRole('button', { name: /Lorem Ipsum/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a large button if the size prop is equal to "large"', () => {
    renderWithTheme(<Button size="large">Lorem Ipsum</Button>)

    expect(screen.getByRole('button', { name: /Lorem Ipsum/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a button with full width if the $fullWidth prop is true', () => {
    renderWithTheme(<Button $fullWidth>Lorem Ipsum</Button>)

    expect(screen.getByRole('button', { name: /Lorem Ipsum/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon if the icon prop is passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Lorem Ipsum</Button>
    )

    expect(
      screen.getByRole('button', { name: /Lorem Ipsum/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
