import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';


const OrderForm = props => {
  const { tripCost } = props;
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.any,
};

export default OrderForm;