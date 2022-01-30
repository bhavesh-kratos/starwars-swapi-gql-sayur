import React from 'react'
import { ApolloProvider } from '@apollo/client'
import Page from './pages'
import { getApolloClient } from './apollo'

import './App.css'

function App() {
  const client = getApolloClient()

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Page />
      </div>
    </ApolloProvider>
  )
}

export default App
