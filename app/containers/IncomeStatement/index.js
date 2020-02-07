/**
 *
 * IncomeStatement
 *
 */

import React from 'react';
import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import RevenueTable from './revenueTable';
import H2 from '../../components/H2';
import Widget from '../../components/Widget';
import Input from '../../components/Input';
import GrossProfitTable from './grossProfitTable';
import useStyles from './styles';

export function IncomeStatement() {
  const classes = useStyles();
  return (
    <Widget className={classes.income_statement}>
      <H2 className={classes.title}>The Income Statement</H2>
      <Container className={classes.table_container}>
        <Widget className={classes.income_statement_table}>
          <Widget className={classes.table_header}>
            <Widget className={classes.date_box}>
              <h4 className={classes.start_date}>Beginning Date</h4>
              <Input
                style={{
                  paddingLeft: '9px',
                  paddingBottom: '5px',
                }}
              />
            </Widget>
            <Widget className={classes.date_box}>
              <h4 className={classes.end_date}>Ending Date &nbsp; </h4>
              <Input
                style={{
                  paddingLeft: '9px',
                  paddingBottom: '5px',
                }}
              />
            </Widget>
          </Widget>
          <RevenueTable />
        </Widget>
        <GrossProfitTable />
      </Container>
      {/* bottom text */}
      <Container>
        <Typography variant="h5">Transaction Summary</Typography>
        <ol>
          <li>
            <p>Invest $5,000 and borrow $10,000.</p>
          </li>
          <li>
            <p>
              Pay $3,000 cash for rent – Expense first month for $1,000.
              Purchase a fixed asset for $3,000 and pay $1,000 in cash.
            </p>
          </li>
          <li>
            <p>
              Receive a $50,000 order for 10 units and a $10,000 deposit from
              the customer. Receive 15 systems from supplier @ $3,000 per system
              ($45,000 on account).
            </p>
          </li>
          <li>
            <p>
              Install 10 systems: materials $30,000, labor $4,000, travel cost
              $1,000, warranty $2,000. Invoice for the balance of the sale
              $40,000.
            </p>
          </li>
          <li>
            <p>Pay $10,000 cash to XYZ Electronics $4,000 payroll.</p>
          </li>
          <li>
            <p>
              Pay $2,000 for marketing expense and owe $3,000 for selling
              expense.
            </p>
          </li>
          <li>
            <p>
              Borrow $10,000 from the bank and pay $10,000 to XYZ Electronics.
              Depreciation $50.
            </p>
          </li>
        </ol>
        <br />
        <br />
      </Container>
    </Widget>
  );
}

IncomeStatement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(IncomeStatement);
