import { gql } from '@apollo/client'

export const getAllData = gql`
  query {
    allFilms {
      data: films {
        id
        name: title
        __typename
        info: openingCrawl
      }
    }
    allPeople {
      data: people {
        id
        name
        __typename
      }
    }
    allPlanets {
      data: planets {
        id
        name
        __typename
      }
    }

    allSpecies {
      data: species {
        id
        name
        __typename
      }
    }
    allVehicles {
      data: vehicles {
        id
        name
        __typename
      }
    }
    allStarships {
      data: starships {
        id
        name
        __typename
      }
    }
  }
`
