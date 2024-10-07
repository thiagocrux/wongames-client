import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o componente
    const { container } = render(<Main />)

    // Busca o componente e verifica a sua existência
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
