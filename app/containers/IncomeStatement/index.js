/**
 *
 * IncomeStatement
 *
 */

import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import RevenueTable from './revenueTable';
import H2 from '../../components/H2';
import Widget from '../../components/Widget';
import GrossProfitTable from './grossProfitTable';
import useStyles from './styles';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function IncomeStatement() {
  const classes = useStyles();
  return (
    <Widget className={classes.income_statement}>
      <H2 className={classes.title}>The Income Statement</H2>
      <Container className={classes.table_container}>
        <Widget className={classes.income_statement_table}>
          <Widget className={classes.table_header}>
            <h4 className={classes.start_date}>Beginning date</h4>
            <h4 className={classes.end_date}>End date</h4>
          </Widget>
          <RevenueTable />
        </Widget>
        <GrossProfitTable />
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
