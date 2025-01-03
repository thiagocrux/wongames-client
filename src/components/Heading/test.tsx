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

  it('should render a black heading when color prop is equal to "black"', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a left border when lineLeft prop is true', () => {
    renderWithTheme(<Heading $lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      borderLeft: '0.7rem solid #F231A5'
    })
  })

  it('should render a bottom border when lineBottom prop is true', () => {
    renderWithTheme(<Heading $lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.7rem solid #F231A5',
      { modifier: '::after' }
    )
  })

  it('should render a smaller bottom border when the size prop is equal to "small"', () => {
    renderWithTheme(
      <Heading size="small" $lineBottom>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      { modifier: '::after' }
    )
  })

  it('should render a small heading when the size prop is equal to "small"', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      fontSize: '1.6rem'
    })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading $lineLeft $lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.7rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading $lineColor="secondary" $lineLeft $lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.7rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
