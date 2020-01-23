/**
 *
 * Label
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  label_style: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    width: '222px',
    height: '51px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '14px',
    textAlign: 'start',
    cursor: 'pointer',
    '@media (max-width: 992px)': {
      width: '168.5px',
      height: '44px',
    },
    '@media (max-width: 768px)': {
      width: '200px',
    },
    '@media (max-width: 576px)': {
      height: '24px',
      fontSize: '11px',
      lineHeight: 1,
      padding: '4px',
    },
  },
}));

function Label(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        margin: props.margin,
      }}
      className={classes.label_style}
    >
      {props.LabelText}
    </div>
  );
}

Label.propTypes = {};

export default Label;
