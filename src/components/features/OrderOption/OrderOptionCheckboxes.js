import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionCheckboxes = props => {
  const { chckboxes } = styles;
  const { values } = props;
  return (
    <div className={chckboxes}>
      {console.log(props)}
      {values.map(value => (
        <label htmlFor="" key={value.id}>
          <input type="checkbox" value={value.id} />
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.any,
};

export default OrderOptionCheckboxes;