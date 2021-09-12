import React, { FC } from 'react'
import AlertComponent, { AlertProps } from './index'

export default {
  title: 'Design System/Atoms/Alerts',
  component: AlertComponent,
  parameters: {
    actions: {
      handles: ['click']
    }
  },
  argTypes: {
    open: {
      options: [true, false],
      control: { type: 'radio' }
    },
    autoHideDuration: {
      control: { type: 'range', min: 1000, max: 10000, step: 1000 }
    },
    severity: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'radio' }
    },
    alertText: {
      control: { type: 'text' }
    }
  }
}

export const Custom: FC<AlertProps> = ({ open, handleClose, autoHideDuration, severity, alertText }) => (
  <AlertComponent open={open} handleClose={handleClose} autoHideDuration={autoHideDuration} severity={severity} alertText={alertText} />
)
