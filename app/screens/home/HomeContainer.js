import { connect } from 'react-redux';
import HomeScreen from './HomeScreen'

const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state.get("pageReducer").get("counter"));
  return {
    counter: state.get("pageReducer").get("counter")
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      reduxIncreaseCounter: () => dispatch({
        type: 'INCREASE_COUNTER',
        value: 1,
      }), 
      reduxDecreaseCounter: () => dispatch({
        type: 'DECREASE_COUNTER',
        value: 1,
      }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)