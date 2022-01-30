import { ApolloLink } from '@apollo/client'
import serverLink from './server'
import { errorLink } from './errors'

const link = ApolloLink.from([errorLink, serverLink])

export default link
