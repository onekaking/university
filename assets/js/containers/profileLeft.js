import { connect } from 'react-redux'
import ProfileLeft from '../components/ProfileLeft'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     initUser: () => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const ProfileLeftContainer = connect(
  mapStateToProps
)(ProfileLeft)

export default ProfileLeftContainer
