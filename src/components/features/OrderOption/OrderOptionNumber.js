import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = props => {

  const { currentValue, limits, setOptionValue } = props;
  const { number, inputSmall } = styles;

  return (
    <div className={number}>
      <input type="number" className={inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;