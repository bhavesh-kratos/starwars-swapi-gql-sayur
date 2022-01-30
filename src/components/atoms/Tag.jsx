import React from 'react'
import { Badge } from 'react-bootstrap'

function Tag({ title, color }) {
  return (
    <div>
      <Badge color={'#fef'} pill>
        {title}
      </Badge>
    </div>
  )
}

export default Tag
