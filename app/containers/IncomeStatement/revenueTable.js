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
          <Label LabelText="REVENUE" />
          <Input dollor="$" />
        </div>
        <Label LabelText="COST OF GOODS" />
        <div className={classes.label_box}>
          <Label LabelText="+MATERIALS" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+LABOR" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+TRAVEL COSTS" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+WARRANTY ALLOWANCE" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <Divider className={classes.total_break} />
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= TOTAL COST OF GOODS SOLD" />
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
