import React from 'react';
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { initUser } from '../actions/user'
import { connect } from 'react-redux'

// const Layout = () => (
//   getInitialState = () => {
//     return {
//       user: {
//         id: 1,
//         name: 'Thien Hoang',
//         url: 'http://localhost:1337/thienhoang'
//       }
//     }
//   },
//   return (
//     <div className="main-container body">
//       <LeftColumn />
//       <RightColumn />
//     </div>
//   )
// )

class Layout extends React.Component {
  contructor() {
    super();
  }

  componentWillMount() {
    console.log(this);
    this.props.dispatch(initUser({
      id: 1,
      name: 'Thien Hoang',
      url: 'http://localhost:1337/thienhoang'
    }))
    // this.setState({
    //   user: {
    //     id: 1,
    //     name: 'Thien Hoang',
    //     url: 'http://localhost:1337/thienhoang'
    //   }
    // });
  }

  render() {
    return (
      <div className="main-container body">
        <LeftColumn />
        <RightColumn />
      </div>
    )
  }
}

export default connect()(Layout)
