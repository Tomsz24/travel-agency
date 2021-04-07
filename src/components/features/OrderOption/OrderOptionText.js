import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = props => {

  const { input } = styles;
  const { currentValue, setOptionValue } = props;
  return (
    <label className={input}>
      <input type="text" value={currentValue} onChange={event => setOptionValue(event.currentTarget.selected)} />
    </label>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;