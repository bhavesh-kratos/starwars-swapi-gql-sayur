import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

function SearchInput({ className, onChange }) {
  return (
    <div>
      <InputGroup className={className}>
        <InputGroup.Text id="basic-addon1">
          <i className="fa fa-search" />
        </InputGroup.Text>
        <FormControl
          placeholder="Search for any Star Wars related stuff.."
          aria-label="search"
          aria-describedby="search-starwars"
          onChange={onChange}
        />
      </InputGroup>
    </div>
  )
}

export default SearchInput
