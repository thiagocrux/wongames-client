import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Heading from '.'
import { renderWithTheme } from '@/utils/tests/helper'

describe('<Heading />', () => {
  it('should render a white heading by default when no color prop is passed', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color prop is equal to black', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a left border when lineLeft prop is true', () => {
    renderWithTheme(<Heading $lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })

  it('should render a bottom border when lineBottom prop is true', () => {
    renderWithTheme(<Heading $lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      { modifier: '::after' }
    )
  })
})
