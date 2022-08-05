import * as S from './styles'

interface IButton {
  ariaLabel: string
  children: React.ReactNode
  onClick?: () => void
}

export const ButtonIcon = (props: IButton) => (
  <S.ButtonIcon aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonIcon>
)

export const ButtonLight = (props: IButton) => (
  <S.ButtonLight aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonLight>
)

export const ButtonPrimary = (props: IButton) => (
  <S.ButtonPrimary aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonPrimary>
)

export const ButtonPrimaryLarge = (props: IButton) => (
  <S.ButtonPrimaryLarge aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonPrimaryLarge>
)

export const ButtonOutlineWide = (props: IButton) => (
  <S.ButtonOutlineWide aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonOutlineWide>
)
