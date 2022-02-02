import React from 'react'
import { Link } from 'react-router-dom'

function FieldValue({ fieldData }) {
  // handles link object
  if (fieldData && fieldData.__typename && fieldData.id) {
    return <Link to={`/details/${fieldData.__typename}/${fieldData.id}`}>{fieldData.name || fieldData.title}</Link>
  }
  // handles string or non-link objects
  return fieldData ? fieldData.name || fieldData.title || fieldData : '-'
}

export default FieldValue
