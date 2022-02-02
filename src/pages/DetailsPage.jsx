import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { PERSON, STARSHIP, SPECIES, PLANET, FILM, VEHICLE } from '../utils/constants'
import {
  getFilmDetails,
  getPersonDetails,
  getPlanetDetails,
  getSpeciesDetails,
  getStarshipDetails,
  getVehicleDetails
} from '../apollo/GraphQL/Queries'
import Loader from '../components/atoms/Loader.jsx'
import DetailsTemplate from '../components/templates/Details.jsx'

function getData(objType) {
  switch (objType) {
    case FILM:
      return getFilmDetails
    case PERSON:
      return getPersonDetails
    case PLANET:
      return getPlanetDetails
    case SPECIES:
      return getSpeciesDetails
    case STARSHIP:
      return getStarshipDetails
    case VEHICLE:
      return getVehicleDetails
    default:
      console.error('Invalid type passed to DetailsPage')
  }
}

function DetailsPage() {
  const { id, type } = useParams()
  const { error, loading, data } = useQuery(getData(type), {
    variables: { objID: id }
  })

  useEffect(() => {
    console.log('data and params changed', data, id)
  }, [data])

  if (loading) {
    return <Loader />
  }

  if (error) {
    console.error('error', error)
    return <div>Error!</div>
  }

  return (
    <div>
      <DetailsTemplate data={data} />
    </div>
  )
}

export default DetailsPage
