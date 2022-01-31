import React from 'react'
import { Button, Icon } from 'react-bootstrap'

function AppButton({ text, color, onClick }) {
  return (
    <Button color={color} onClick={onClick}>
      {text}
    </Button>
  )
}

export default AppButton
