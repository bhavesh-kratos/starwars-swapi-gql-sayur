import { gql } from '@apollo/client'

export const getAllFilms = gql`
  query {
    allFilms {
      films {
        id
        title
      }
    }
  }
`

// query {
//   film(id: "ZmlsbXM6MQ==") {
//     episodeID
//     openingCrawl
//     vehicleConnection {
//       totalCount
//       vehicles {
//         name
//       }
//     }
//   }
// }
