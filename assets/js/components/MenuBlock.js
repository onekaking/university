import React from 'react'
import MenuItem from './MenuItem'

const MenuBlock = ({ menu }) => {
  return (
    <div className="menu-section">
      <h3 className="menu-title">sdf</h3>
      <ul className="nav side-menu">
        { menu.items.map(item => 
          <MenuItem key={item.id} item={item} />
        )}
      </ul>
    </div>
  )
}
export default MenuBlock
