import { useQuery } from '@apollo/client'
import React from 'react'
import Button from 'react-bootstrap/Button'
import { getAllFilms } from '../apollo/GraphQL/Queries'

function Demo() {
  const { error, loading, data } = useQuery(getAllFilms)
  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <h1 className="app-heading">
        Star Wars <br /> Encyclopedia
      </h1>
    </div>
  )
}

export default Demo
