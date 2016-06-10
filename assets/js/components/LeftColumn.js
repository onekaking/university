import React, { PropTypes } from 'react'
import ProfileLeftContainer from '../containers/ProfileLeft'
import SideBarMenuContainer from '../containers/SideBarMenu'

const LeftColumn = () => (
  <div className="col-md-3 left-col menu_fixed">
    <div className="scroll-view">
      <div className="navbar nav-title">
        <a href="index.html" className="site-title">
          <i className="fa fa-paw"></i>
          <span>E Project</span>
        </a>
      </div>

      <div className="clearfix"></div>

      <ProfileLeftContainer />

      <div className="clearfix"></div>

      <SideBarMenuContainer />

      <div className="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span className="fa fa-bars" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
)

export default LeftColumn
