import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { flattenDetailsData } from '../../utils/helpers'
import Button from '../atoms/Button.jsx'
import DetailsCard from '../organisms/DetailsCard.jsx'
import AppHeading from '../atoms/AppHeading.jsx'
import '../../styles/details.css'

function DetailsTemplate({ data = {} }) {
  const {
    data: { name, title, __typename: type, ...fields }
  } = data
  const navigate = useNavigate()

  const flattenedFields = flattenDetailsData(fields)

  return (
    <div>
      <Container className="fluid py-5">
        <div className="sw-details-header">
          <Button
            className="sw-btn"
            text="Back"
            onClick={() => {
              navigate(-1)
            }}
          />
          <span style={{ float: 'clear' }}>
            <AppHeading />
          </span>
          <Button
            className="sw-btn"
            text="Home"
            onClick={() => {
              navigate('/')
            }}
          />
        </div>
        <DetailsCard title={name || title} type={type} fields={flattenedFields} />
      </Container>
    </div>
  )
}

export default DetailsTemplate
