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

export function RevenueTable() {
  const classes = useStyles();
  return (
    <div className={classes.first_table}>
      <div className={classes.left_content}>
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="Revenue" />
          <Input dollor="$" />
        </div>
        <Label LabelText="Cost of sales" />
        <div className={classes.label_box}>
          <Label LabelText="+Materials" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Labor" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Travel costs" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Warranty Allowance" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input />
          </span>
        </div>
        <Divider className={classes.total_break} />
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= Total cost of sales" />
          <span className={classes.label_span}>
            <p className={classes.operator}>-</p>
            <Input dollor="$" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default RevenueTable;
