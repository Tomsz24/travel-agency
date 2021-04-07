import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = props => {

  const { values, setOptionValue, required } = props;
  const { component, icon } = styles;

  return (
    <div className={component}>
      {required ? '' : (
        <div onClick={() => setOptionValue('')}>
          <Icon name={'times-circle'} /> {'none'}
        </div>
      )}
      {values.map(value => (
        <div className={icon} key={value.id} onClick={() => setOptionValue(value.id)}>
          <Icon name={value.icon} />{value.name} {formatPrice(value.price)}
        </div>
      ))}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.any,
};

export default OrderOptionIcons;