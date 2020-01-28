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
          <Label LabelText="= GROSS PROFIT" />
          <span className={classes.label_span}>
            <p className={classes.operator}>=</p>
            <Input dollor="$" />
          </span>
        </div>
        <Label LabelText="SG&A EXPENSES" />
        <div className={classes.label_box}>
          <Label LabelText="+RENT" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+MARKETING" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+SELLING EXPENSES" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+DEPRECIATION" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input style={{ paddingLeft: '9px', paddingBottom: '5px' }} />
          </span>
        </div>
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= TOTAL SG&A EXPENSES" />
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
