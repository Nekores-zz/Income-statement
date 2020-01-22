/**
 *
 * IncomeStatement
 *
 */

import React from 'react';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles';

export function GrossProfitTable() {
  const classes = useStyles();
  return (
    <div className={`${classes.first_table} ${classes.bdr_top}`}>
      <div className={classes.left_content}>
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= Gross profit" />
          <span className={classes.label_span}>
            <p className={classes.operator}>=</p>
            <Input dollor="$" />
          </span>
        </div>
        <Label LabelText="SG&A expenses" />
        <div className={classes.label_box}>
          <Label LabelText="+Rent" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Marketing" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Selling expenses" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Depreciation" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= Total SG&A expenses" />
          <span className={classes.label_span}>
            <p className={classes.operator}>-</p>
            <Input dollor="$" />
          </span>
        </div>
        <Divider className={classes.divider} />
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= EBIT" />
          <span className={classes.label_span}>
            <p className={classes.operator}>=</p>
            <Input dollor="$" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default GrossProfitTable;
