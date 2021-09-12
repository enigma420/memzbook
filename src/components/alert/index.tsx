import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

/* Button interface props */
export interface AlertProps {
  open?: boolean | undefined
  handleClose?: () => void
  autoHideDuration?: number | null | undefined
  severity?: 'success' | 'info' | 'warning' | 'error'
  alertText?: string
}

/* Button Component */
const AlertComponent: FC<AlertProps> = ({ open, handleClose, autoHideDuration, severity, alertText }) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        <strong>{severity?.toUpperCase()}</strong>
        <br />
        {alertText}
      </Alert>
    </Snackbar>
  )
}

/* Default props */
AlertComponent.defaultProps = {
  open: false,
  autoHideDuration: 5000,
  severity: 'success',
  alertText: 'Default alert text'
}

/* Prop-types */
AlertComponent.propTypes = {
  /* Required */
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  severity: PropTypes.any.isRequired,
  alertText: PropTypes.string.isRequired,
  /* Non-Required */
  autoHideDuration: PropTypes.number
}

export default AlertComponent
