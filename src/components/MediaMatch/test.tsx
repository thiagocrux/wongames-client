import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch $greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch $lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no prop is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the prop value', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      // NOTE: Due to a bug in the lib the double whitespace after the "min-width:" is required
      media: '(min-width:  768px)'
    })

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      // NOTE: Due to a bug in the lib the double whitespace after the "min-width:" is required
      media: '(max-width:  768px)'
    })
  })
})
