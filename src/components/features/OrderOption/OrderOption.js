import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';
// import PropTypes from 'prop-types';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  date: OrderOptionDate,
  text: OrderOptionText,
};

const OrderOption = ({ name, type, id, setOrderOption, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({ [id]: value })}
          {...otherProps}
        />
      </div>
    );
  }
};

// OrderOption.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };
export default OrderOption;