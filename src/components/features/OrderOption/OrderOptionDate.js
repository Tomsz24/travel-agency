import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';


const OrderOptionDate = props => {
  const { currentValue, setOptionValue } = props;

  return (
    <DatePicker selected={currentValue} onChange={event => setOptionValue(event)} />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;