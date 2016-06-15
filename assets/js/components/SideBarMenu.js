import React from 'react'
import MenuBlock from './MenuBlock'

const SideBarMenu = ({ menus }) => {
  return (
    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
      {menus.map(menu => 
        <MenuBlock key={menu.id} menu ={menu} />
      )}
    </div>
  )
}
export default SideBarMenu
