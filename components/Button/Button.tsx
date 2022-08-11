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

export const ButtonLink = (props: IButton) => (
  <S.ButtonLink aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonLink>
)

export const ButtonPrimary = (props: IButton) => (
  <S.ButtonPrimary aria-label={props.ariaLabel} onClick={props.onClick}>
    {props.children}
  </S.ButtonPrimary>
)

// спустя 57 часов выяснилось, что где-то border-radius 3px, а где-то 5px 👍
export interface IButtonLarge extends IButton {
  rounder?: boolean
}

export const ButtonPrimaryLarge = (props: IButtonLarge) => (
  <S.ButtonPrimaryLarge
    aria-label={props.ariaLabel}
    rounder={props.rounder}
    onClick={props.onClick}
  >
    {props.children}
  </S.ButtonPrimaryLarge>
)

export const ButtonOutlineWide = (props: IButtonLarge) => (
  <S.ButtonOutlineWide aria-label={props.ariaLabel} rounder={props.rounder} onClick={props.onClick}>
    {props.children}
  </S.ButtonOutlineWide>
)
