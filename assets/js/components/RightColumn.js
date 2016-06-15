import React, { PropTypes } from 'react'
import HeaderRight from './HeaderRight'
import Content from './Content'
import Footer from './Footer'

const RightColumn = ({ rooms }) => (
  <div className="right-col">
    <HeaderRight />
    <Content />
    <Footer />
  </div>
)

export default RightColumn
