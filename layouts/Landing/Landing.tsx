import { Controls } from 'layouts'

import * as S from './styles'

export const Landing = () => (
  <S.Landing>
    <S.Container>
      <h1>
        Рассчитайте
        <br />
        стоимость доставки из Китая
      </h1>

      <Controls variant="landing" />
    </S.Container>
  </S.Landing>
)
