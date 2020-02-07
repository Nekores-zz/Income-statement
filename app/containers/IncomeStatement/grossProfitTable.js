/**
 *
 * IncomeStatement
 *
 */

import React from 'react';
import Divider from '@material-ui/core/Divider';
import Label from '../../components/Label';
import Input from '../../components/Input';
import useStyles from './styles';

export function GrossProfitTable() {
  const classes = useStyles();
  return (
    <div className={`${classes.first_table} ${classes.bdr_top}`}>
      <div className={classes.left_content}>
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= Gross Profit" />
          <span className={classes.label_span}>
            <p className={classes.operator}>=</p>
            <Input id="grossProfit1" dollor="$" />
          </span>
        </div>
        <Label LabelText="SG&A Expenses" />
        <div className={classes.label_box}>
          <Label LabelText="+RENT" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input
              id="grossProfit2"
              style={{ paddingLeft: '9px', paddingBottom: '5px' }}
            />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Marketing" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input
              id="grossProfit3"
              style={{ paddingLeft: '9px', paddingBottom: '5px' }}
            />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Selling Expenses" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input
              id="grossProfit4"
              style={{ paddingLeft: '9px', paddingBottom: '5px' }}
            />
          </span>
        </div>
        <div className={classes.label_box}>
          <Label LabelText="+Depreciation" />
          <span className={classes.label_span}>
            <p className={classes.operator}>+</p>
            <Input
              id="grossProfit5"
              style={{ paddingLeft: '9px', paddingBottom: '5px' }}
            />
          </span>
        </div>
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= Total SG&A Expenses" />
          <span className={classes.label_span}>
            <p className={classes.operator}>-</p>
            <Input id="grossProfit6" dollor="$" />
          </span>
        </div>
        <Divider className={classes.divider} />
        <div className={`${classes.label_box} ${classes.full_width}`}>
          <Label LabelText="= EBIT" />
          <span className={classes.label_span}>
            <p className={classes.operator}>=</p>
            <Input id="grossProfit7" dollor="$" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default GrossProfitTable;
