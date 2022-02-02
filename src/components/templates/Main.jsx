import React from 'react'
import { Container } from 'react-bootstrap'
import AppHeading from '../atoms/AppHeading.jsx'
import SearchInput from '../molecules/SearchInput.jsx'
import List from '../organisms/SWList.jsx'

function MainTemplate({ listItems, onListItemClick, onSearchInputChange }) {
  return (
    <Container className="fluid py-5">
      <AppHeading />
      <SearchInput className="mb-3" onChange={onSearchInputChange} />
      <List listItems={listItems} onItemClick={onListItemClick} />
    </Container>
  )
}

export default MainTemplate
