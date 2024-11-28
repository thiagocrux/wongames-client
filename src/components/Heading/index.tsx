import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium'
  color?: 'white' | 'black'
  $lineLeft?: boolean
  $lineBottom?: boolean
  $lineColor?: 'primary' | 'secondary'
}

const Heading = ({
  size = 'medium',
  color = 'white',
  $lineColor = 'primary',
  $lineLeft = false,
  $lineBottom = false,
  children
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    $lineColor={$lineColor}
    $lineLeft={$lineLeft}
    $lineBottom={$lineBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
