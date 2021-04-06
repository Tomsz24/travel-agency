import React from 'react';
import styles from './OrderSummary.scss';

const OrderSummary = () => {
  const { component } = styles;
  return (
    <h2 className={component}>
      <strong>$12,345</strong>
    </h2>
  );
};

export default OrderSummary;