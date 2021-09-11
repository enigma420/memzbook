import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

/* Button interface props */
export interface ButtonProps {
  label?: string
  variant?: 'text' | 'outlined' | 'contained' | undefined
  color?: 'primary' | 'inherit' | 'secondary' | 'default' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  disabled?: boolean
  handleClick?: () => void
}

/* Button Component */
const ButtonComponent: FC<ButtonProps> = ({ label, variant, color, size, disabled, handleClick }) => {
  return (
    <Button disabled={disabled} onClick={handleClick} variant={variant} color={color} size={size}>
      <strong>{label?.toUpperCase()}</strong>
    </Button>
  )
}

/* Default props */
ButtonComponent.defaultProps = {
  label: 'Button label',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: false
}

/* Prop-types */
ButtonComponent.propTypes = {
  /* Required */
  label: PropTypes.string,
  /* Non-Required */
  variant: PropTypes.any,
  size: PropTypes.any,
  color: PropTypes.any,
  disabled: PropTypes.any
}

export default ButtonComponent
