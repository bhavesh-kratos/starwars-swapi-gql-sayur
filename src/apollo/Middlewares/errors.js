import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line no-unused-vars
    graphQLErrors.map(({ message, extensions }) => {
      console.error(`[GraphQL error]: Message: ${message}`)
      return null
    })
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})
