import React from 'react'
import FieldValue from '../molecules/FieldValue.jsx'

function DetailsValue({ fieldValue }) {
  if (Array.isArray(fieldValue)) {
    if (!fieldValue.length) {
      return '-'
    }

    return (
      <ul className="sw-values-list">
        {fieldValue.map((value, index) => (
          <li key={value.id}>
            <FieldValue fieldData={value} />
          </li>
        ))}
      </ul>
    )
  }

  return <FieldValue fieldData={fieldValue} />
}

export default DetailsValue
