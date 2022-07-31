import * as S from './styles'

interface IButton {
  ariaLabel: string
  children: React.ReactNode
}

export const ButtonLight = (props: IButton) => (
  <S.ButtonLight aria-label={props.ariaLabel}>{props.children}</S.ButtonLight>
)

export const ButtonPrimary = (props: IButton) => (
  <S.ButtonPrimary aria-label={props.ariaLabel}>{props.children}</S.ButtonPrimary>
)

export const ButtonPrimaryLarge = (props: IButton) => (
  <S.ButtonPrimaryLarge aria-label={props.ariaLabel}>{props.children}</S.ButtonPrimaryLarge>
)

export const ButtonOutlineWide = (props: IButton) => (
  <S.ButtonOutlineWide aria-label={props.ariaLabel}>{props.children}</S.ButtonOutlineWide>
)
