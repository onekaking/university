import { connect } from 'react-redux'
import SideBarMenu from '../components/SideBarMenu'

const mapStateToProps = (state) => {
  return {
    menus: [
      {
        name: 'General',
        id: 0,
        items: [
          {
            name: 'Home',
            id: 1,
            iconClass: 'fa fa-home',
            isActive: true,
            items: [
              {
                id: 2,
                name: 'Dashboard',
                url: 'index.html'
              },
              {
                id: 3,
                name: 'Dashboard1',
                url: 'index.html'
              }
            ]
          },
          {
            name: 'Form',
            id: 4,
            iconClass: 'fa fa-edit',
            isActive: false,
            items: [
              {
                id: 5,
                name: 'Dashboard',
                url: 'index.html'
              },
              {
                id: 6,
                name: 'Dashboard1',
                url: 'index.html'
              }
            ]
          }
        ]
      },
      {
        name: 'Live on',
        id: 7,
        items: [
          {
            name: 'Additional Pages',
            id: 8,
            iconClass: 'fa fa-bug',
            isActive: false,
            items: [
              {
                id: 9,
                name: 'E-Commerce',
                url: 'index.html'
              },
              {
                id: 10,
                name: 'Contact',
                url: 'index.html'
              }
            ]
          },
          {
            name: 'Extras',
            id: 11,
            iconClass: 'fa fa-windows',
            isActive: false,
            items: [
              {
                id: 12,
                name: 'Dashboard',
                url: 'index.html'
              },
              {
                id: 13,
                name: 'Dashboard1',
                url: 'index.html'
              }
            ]
          }
        ]
      }
    ]
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClickItem: (id) => {
//       console.log('onClickItem' + id);
//     }
//   }
// }

const SideBarMenuContainer = connect(
  mapStateToProps
)(SideBarMenu)

export default SideBarMenuContainer
