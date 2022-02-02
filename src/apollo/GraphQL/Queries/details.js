import { gql } from '@apollo/client'

export const getFilmDetails = gql`
  query ($objID: ID!) {
    data: film(id: $objID) {
      title
      __typename
      episodeID
      openingCrawl
      director
      producers
      releaseDate
      mapData1: speciesConnection {
        species {
          id
          name
          __typename
        }
      }
      mapData2: starshipConnection {
        starships {
          id
          name
          __typename
        }
      }
      mapData3: characterConnection {
        characters {
          id
          name
          __typename
        }
      }
    }
  }
`

export const getPersonDetails = gql`
  query ($objID: ID!) {
    data: person(id: $objID) {
      name
      __typename
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        __typename
        id
        name
      }
      species {
        id
        name
        __typename
      }
      mapData1: filmConnection {
        films {
          name: title
          id
          __typename
        }
      }
    }
  }
`

export const getPlanetDetails = gql`
  query ($objID: ID!) {
    data: planet(id: $objID) {
      name
      __typename
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      mapData1: residentConnection {
        residents {
          id
          name
          __typename
        }
      }
    }
  }
`

export const getSpeciesDetails = gql`
  query ($objID: ID!) {
    data: species(id: $objID) {
      name
      __typename
      classification
      designation
      averageHeight
      averageLifespan
      eyeColors
      hairColors
      skinColors
      language
      homeworld {
        id
        name
        __typename
      }
    }
  }
`
export const getVehicleDetails = gql`
  query ($objID: ID!) {
    data: vehicle(id: $objID) {
      name
      __typename
      model
      vehicleClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      cargoCapacity
      consumables
      mapData1: pilotConnection {
        pilots {
          id
          name
          __typename
        }
      }
    }
  }
`
export const getStarshipDetails = gql`
  query ($objID: ID!) {
    data: starship(id: $objID) {
      name
      __typename
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
      mapData1: pilotConnection {
        pilots {
          id
          name
          __typename
        }
      }
    }
  }
`
