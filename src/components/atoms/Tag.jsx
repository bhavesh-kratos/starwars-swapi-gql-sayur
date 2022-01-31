import React from 'react'
import { Badge } from 'react-bootstrap'

function Tag({ title, color }) {
  return (
    <Badge bg={color} pill text="white">
      {title}
    </Badge>
  )
}

export default Tag
