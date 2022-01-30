import { InMemoryCache, ApolloClient } from '@apollo/client'
import link from './Middlewares'
import initCache from './Cache'

let client

export const getApolloClient = () => {
  if (client) return client
  const cache = initCache()
  const apolloClient = new ApolloClient({
    link,
    cache,
    connectToDevTools: process.env.NODE_ENV === 'development'
  })

  return apolloClient
}
