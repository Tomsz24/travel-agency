import { connect } from 'react-redux';
import Order from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(Order);