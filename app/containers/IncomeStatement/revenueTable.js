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
        <Label LabelText="Cost of Goods" />
        <div className={classes.label_box}>
          <Label LabelText="+Materials" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Labor" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Travel Costs" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Warranty Allowance" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <Divider className={classes.total_break} />
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= Total Cost of Goods Sold" />
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
