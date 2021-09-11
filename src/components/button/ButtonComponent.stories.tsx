import React, { FC } from 'react'
import ButtonComponent, { ButtonProps } from './index'

export default {
  title: 'Design System/Atoms/Buttons',
  component: ButtonComponent,
  parameters: {
    actions: {
      handles: ['click']
    }
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    label: {
      control: { type: 'text' }
    },
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
}

export const Custom: FC<ButtonProps> = ({ label, variant, color, size, disabled, handleClick }) => (
  <ButtonComponent label={label} variant={variant} color={color} size={size} disabled={disabled} handleClick={handleClick} />
)

export const Small: FC<ButtonProps> = ({ label, variant, color, size }) => (
  <ButtonComponent label={label} variant={variant} color={color} size={size} handleClick={() => console.log('click')} />
)

export const Medium: FC<ButtonProps> = ({ variant, color, size }) => (
  <ButtonComponent label='medium button' variant={variant} color={color} size={size} handleClick={() => console.log('click')} />
)

export const Large: FC<ButtonProps> = ({ variant, color, size }) => (
  <ButtonComponent label='large button' variant={variant} color={color} size={size} handleClick={() => console.log('click')} />
)

export const Template: FC<ButtonProps> = ({ color }) => {
  return <ButtonComponent color={color} />
}
