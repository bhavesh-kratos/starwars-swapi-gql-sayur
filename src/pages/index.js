import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { getAllData } from '../apollo/GraphQL/Queries'
import Loader from '../components/atoms/Loader.jsx'
import MainTemplate from '../components/templates/Main.jsx'
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
    let { value } = e.target
    value = value.trim()
    debounce(() => {
      setFilterData(value)
      setSearchValue(value)
    })()
  }

  const onSWItemClick = (item) => {
    navigate(`/details/${item.__typename}/${item.id}`)
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h3>Error!</h3>
  }

  return (
    <MainTemplate listItems={filteredListData} onListItemClick={onSWItemClick} onSearchInputChange={onInputChange} />
  )
}

export default Main
