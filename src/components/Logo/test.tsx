import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'
import { renderWithTheme } from '@/utils/tests/helper'

describe('<Logo />', () => {
  it('should render a white text by default when no color prop is passed', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black text when the color prop is equal to "black"', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo by default when no size prop is passed', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo when the size prop is equal to "large"', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text when the hideOnMobile prop is true', () => {
    renderWithTheme(<Logo $hideOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        // NOTE: Due to a bug in the lib the double whitespace after the "max-width:" is required
        media: '(max-width:  768px)'
      }
    )
  })
})
