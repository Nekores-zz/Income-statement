/**
 *
 * IncomeStatement
 *
 */

import React from 'react';
import Container from '@material-ui/core/Container';
import RevenueTable from './revenueTable';
import H2 from '../../components/H2';
import Widget from '../../components/Widget';
import Input from '../../components/Input';
import GrossProfitTable from './grossProfitTable';
import useStyles from './styles';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function IncomeStatement() {
  const classes = useStyles();
  return (
    <Widget className={classes.income_statement}>
      <H2 className={classes.title}>THE INCOME STATEMENT</H2>
      <Container className={classes.table_container}>
        <Widget className={classes.income_statement_table}>
          <Widget className={classes.table_header}>
            <Widget className={classes.date_box}>
              <h4 className={classes.start_date}>BEGINNING DATE</h4>
              <Input
                style={{
                  paddingLeft: '9px',
                  paddingBottom: '5px',
                  borderBottom: '2px dotted',
                }}
              />
            </Widget>
            <Widget className={classes.date_box}>
              <h4 className={classes.end_date}>ENDING DATE &nbsp; </h4>
              <Input
                style={{
                  paddingLeft: '9px',
                  paddingBottom: '5px',
                  borderBottom: '2px dotted',
                }}
              />
            </Widget>
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
