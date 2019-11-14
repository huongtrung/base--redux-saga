import { connect } from 'react-redux';
import HomeScreen from './HomeScreen'
import * as pageActions from '../../modules/actions/pageList';

const mapStateToProps = state => ({
  pageList: state.get("pageReducer").get("pageList")
})

const mapDispatchToProps = {
  ...pageActions
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)