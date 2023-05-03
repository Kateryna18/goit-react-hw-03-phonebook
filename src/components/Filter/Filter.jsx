import React from 'react';
import css from 'components/Filter/Filter.module.css';
import PropTypes from 'prop-types';

export function Filter({handleChange, value}) {
  
    return (
    <div className={css.filterBox}>
        <input className={css.filterInput} placeholder='Search contacts' type="text" value={value} onChange={handleChange} name="filter"/>
    </div>
  )
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}