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

export const ButtonPrimaryWithIcon = (props: IButton) => (
  <S.ButtonPrimaryWithIcon aria-label={props.ariaLabel}>
    {props.children}
    <S.IconArrowRight />
  </S.ButtonPrimaryWithIcon>
)

export const ButtonOutlineWithIcon = (props: IButton) => (
  <S.ButtonOutlineWithIcon aria-label={props.ariaLabel}>
    {props.children}
    <S.IconArrowRightShort />
  </S.ButtonOutlineWithIcon>
)
