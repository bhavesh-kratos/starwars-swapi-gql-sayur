import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getAllData } from '../apollo/GraphQL/Queries'
import SearchInput from '../components/molecules/SearchInput.jsx'
import List from '../components/organisms/List.jsx'
import { debounce, retrieveDataAsMap } from '../utils/helpers'

function Main() {
  const { error, loading, data } = useQuery(getAllData)
  const [filteredListData, setFilteredListData] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const navigate = useNavigate()
  const listItems = retrieveDataAsMap(data)

  const setFilterData = (value) => {
    const filteredData = listItems.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredListData(filteredData)
  }

  React.useEffect(() => {
    setFilterData(searchValue)
  }, [data])

  const onInputChange = (e) => {
    const { value } = e.target
    debounce(() => {
      setFilterData(value)
      setSearchValue(value)
    })()
  }

  const onSWItemClick = (item) => {
    navigate(`/details/${item.__typename}/${item.id}`)
  }

  // console.log({ filteredListData })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error!</div>
  }

  return (
    <div>
      <Container className="fluid">
        <h1 className="app-heading mb-5">
          Star Wars <br /> Encyclopedia
        </h1>
        <SearchInput className="mb-3" onChange={onInputChange} />

        <List listItems={filteredListData} onItemClick={onSWItemClick} />
      </Container>
    </div>
  )
}

export default Main
