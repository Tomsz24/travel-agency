import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const OrderOptionDate = props => {

  const { setOptionValue, currentValue } = props;

  return (
    <DatePicker selected={currentValue} onChange={event => (
      setOptionValue(event.currentTarget)
    )} />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDate;