import React from 'react'

const MenuItem = ({ item }) => {
  console.log(item);
  let isCheckActive = (isActive) => {
    return isActive ? "active" : "";
  }

  return (
    <li className= { isCheckActive(item.isActive) } ><a><i className= { item.iconClass } ></i> { item.name } <span className="fa fa-chevron-down"></span></a>
      <ul className="nav child-menu">
        { item.items.map(childItem => 
          <li><a key={childItem.id} href= { childItem.url } > { childItem.name } </a></li>
        )}
      </ul>
    </li>
  )
}
export default MenuItem
