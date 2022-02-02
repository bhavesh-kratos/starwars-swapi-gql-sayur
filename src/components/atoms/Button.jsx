import React from 'react'
import { Button, Icon } from 'react-bootstrap'

function AppButton({ text, ...extraProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...extraProps}>{text}</Button>
}

export default AppButton
