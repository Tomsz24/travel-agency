import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = props => {
  const { checkboxes } = styles;
  const { values, currentValue, setOptionValue } = props;
  return (
    <div className={checkboxes}>
      {values.map(value => (
        <label htmlFor="" key={value.id}>
          <input type="checkbox" value={value.id} checked={currentValue.includes(`${value.id}`) ? true : false} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))} />
          {value.name}
          {formatPrice(value.price)}
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.any,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;