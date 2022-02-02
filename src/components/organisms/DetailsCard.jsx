import React from 'react'
import { Card } from 'react-bootstrap'
import Tag from '../atoms/Tag.jsx'
import { titleUpperCase } from '../../utils/helpers'
import { TAG_COLOR } from '../../utils/constants'

import '../../styles/card.css'
import DetailsValue from './DetailsValue.jsx'

function DetailsCard({ fields, title, type }) {
  return (
    <Card className="sw-card text-center">
      <Card.Body>
        <Card.Title className="sw-details-title">{title}</Card.Title>
        <Card.Subtitle className="sw-details-subtitle">
          <Tag title={type} color={TAG_COLOR[type]} pill />
        </Card.Subtitle>
        <div className="sw-details-text">
          {Object.entries(fields).map(([key, value]) => (
            <div key={key}>
              <h5 className="sw-details-key my-3">{titleUpperCase(key)}</h5>
              <span className="sw-details-value">
                <DetailsValue fieldValue={value} />{' '}
              </span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default DetailsCard
