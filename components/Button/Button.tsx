import React from 'react'
import styled from '@emotion/styled'

interface IButton {
  ariaLabel: string
  className?: string
  children: React.ReactNode

  fontFamily?: string
  color?: string
  backgroundColor?: string
  boxShadow?: string

  padding?: string
  borderRadius?: number

  hoverColor?: string
  hoverBackgroundColor?: string
}

const Button = (props: IButton) => {
  return (
    <button aria-label={props.ariaLabel} className={props.className}>
      {props.children}
    </button>
  )
}

const StyledButton = styled(Button)<IButton>((props) => ({
  fontFamily: props.fontFamily,
  fontFize: 17,
  fontWeight: 500,

  padding: props.padding,
  borderRadius: props.borderRadius,

  color: props.color,
  backgroundColor: props.backgroundColor,
  boxShadow: props.boxShadow,

  '&:hover': {
    color: props.hoverColor,
    backgroundColor: props.hoverBackgroundColor
  },

  '&:active': {
    color: '#606f7a',
    backgroundColor: '#ffffff'
  }
}))

export default StyledButton
