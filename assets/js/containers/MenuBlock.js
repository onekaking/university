import { connect } from 'react-redux'
import MenuBlock from '../components/MenuBlock'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  }
}

const MenuBlockContainer = connect(
  mapStateToProps
)(MenuBlock)

export default MenuBlockContainer
