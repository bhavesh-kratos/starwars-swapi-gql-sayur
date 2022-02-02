import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Tag from '../atoms/Tag.jsx'
import { TAG_COLOR } from '../../utils/constants'
import '../../styles/list.css'

function List({ listItems, onItemClick = () => {} }) {
  return (
    <ListGroup className="sw-list" as="ul" numbered>
      {listItems.map((item, index) => (
        <ListGroup.Item
          key={`${item.id}`}
          as="li"
          className="d-flex justify-content-between align-items-start has-pointer"
          onClick={() => onItemClick(item)}
        >
          <div className="ms-2 me-auto">
            <div className="pull-left fw-bold">{item.name}</div>
            <br />
            <div className="item-info">{item.info}</div>
          </div>
          <Tag title={item.__typename} color={TAG_COLOR[item.__typename]} pill />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default List
