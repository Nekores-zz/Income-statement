/**
 *
 * Input
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input_box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '10px',
    '@media (max-width: 576px)': {
      paddingRight: '6px',
    },
  },
  input_style: {
    border: 'none',
    borderBottom: '1px solid #949393 ',
    background: '#fdf594',
    paddingLeft: '22px',
    paddingBottom: '15px',
    fontSize: '14px',
    '&:focus': {
      outline: 'none',
    },
    '@media (max-width: 576px)': {
      width: '95px',
      paddingBottom: '2px',
      paddingLeft: '14px',
      fontSize: '12px',
    },
  },
  dollor: {
    position: 'relative',
    left: 16,
    fontSize: '20px',
    color: '#000',
    paddingBottom: '18px',
    '@media (max-width: 576px)': {
      fontSize: '12px',
      left: 11,
      paddingBottom: '0',
    },
  },
}));

function Input(props) {
  function addComma(inputValue) {
    if (typeof inputValue === 'number') {
      return inputValue
        .toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return inputValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const handleComma = (event, id) => {
    if (event.which == 48 || event.which == 8) {
      // do nothing
    } else if (event.which < 48 || event.which > 57) {
      event.preventDefault();
    }
    setTimeout(function() {
      const input = document.getElementById(id);
      const newValue = input.value === '' ? '' : addComma(input.value);
      input.value = newValue;
    }, 0.5);
  };
  const classes = useStyles();
  return (
    <div className={classes.input_box}>
      <p className={classes.dollor}>{props.dollor}</p>
      <input
        className={`${props.className} ${classes.input_style}`}
        style={props.style}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        id={props.id}
        onKeyDown={event => handleComma(event, props.id)}
      />
    </div>
  );
}

Input.propTypes = {};

export default Input;
