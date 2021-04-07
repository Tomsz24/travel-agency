import { connect } from 'react-redux';
import Order from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: order => dispatch(setOrderOption(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);