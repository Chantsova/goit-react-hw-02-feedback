import './statistics.css';
import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className="rate">
      <ul className="rate__list">
        <li className="rate__item--good">
          <p className="rate__item__subtitle">Good:</p>
          <p>{good}</p>
        </li>
        <li className="rate__item--neutral">
          <p className="rate__item__subtitle">Neutral:</p>
          <p> {neutral}</p>
        </li>
        <li className="rate__item--bad">
          <p className="rate__item__subtitle">Bad:</p>
          <p> {bad}</p>
        </li>
        <li className="rate__item--total">
          <p className="rate__item__subtitle">Total:</p>
          <p> {total}</p>
        </li>
        <li className="rate__item--percent">
          <p className="rate__item__subtitle">Positive feedback:</p>
          <p> {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
