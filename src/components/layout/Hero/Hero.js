import React from 'react';
import styles from './Hero.scss';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';
import HappyHoursAd from '../../features/HappyHourAd/HappyHourAd';
import PropTypes from 'prop-types';

const Hero = ({ variant = '', titleText, imageSrc, ...otherProps }) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <div className={styles.daysToSummer}>
      <DaysToSummer />
    </div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHoursAd />
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
