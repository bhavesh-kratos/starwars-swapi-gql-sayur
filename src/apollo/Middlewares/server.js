import { HttpLink } from '@apollo/client'

const protocol = process.env.REACT_APP_GRAPHQL_PROTOCOL
const host = process.env.REACT_APP_GRAPHQL_HOST
const port = process.env.REACT_APP_GRAPHQL_PORT
const version = process.env.REACT_APP_GRAPHQL_VERSION
const route = process.env.REACT_APP_GRAPHQL_ROUTE

const serverLink = new HttpLink({
  // uri: `${protocol}://${host}:${port}/${version}/${route}`,
  uri: `https://swapi-graphql.netlify.app/.netlify/functions/index`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  },
  credentials: 'omit'
})

export default serverLink
