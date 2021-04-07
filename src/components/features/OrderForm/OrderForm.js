import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = props => {
  const { tripCost, options, setOrderOption } = props;
  return (
    <Row>
      {pricing.map(item => (
        <Col md={4} key={item.id}>
          <OrderOption name={item.name} type={item.type} currentValue={options[item.id]} setOrderOption={setOrderOption} {...item} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} setOrderOption={setOrderOption} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;