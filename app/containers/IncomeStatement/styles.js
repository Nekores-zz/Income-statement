import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  income_statement_table: {
    background: '#fdf594',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '2rem',
    '@media (max-width: 576px)': {
      fontSize: '1.3rem',
    },
  },
  table_container: {
    marginBottom: '2rem',
    borderBottom: '1px solid #949393',
    padding: 0,
  },
  table_header: {
    display: 'flex',
    border: '1px solid #949393',
    // '@media (max-width: 576px)': {
    //   marginTop: '1rem',
    // },
  },
  first_table: {
    paddingTop: '3rem',
    border: '1px solid #949393',
    borderTop: '0',
    borderBottom: '0',
    background: '#fdf594',
    '@media (max-width: 576px)': {
      paddingTop: '0',
    },
  },
  bdr_top: {
    borderTop: '1px solid #000',
  },
  start_date: {
    paddingLeft: '1%',
    '@media (max-width: 576px)': {
      fontSize: '14px',
    },
  },
  end_date: {
    paddingLeft: '45%',
    '@media (max-width: 576px)': {
      fontSize: '14px',
    },
  },
  label_box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    '@media (max-width: 768px)': {
      width: '69%',
    },
    '@media (max-width: 576px)': {
      alignItems: 'flex-end',
    },
  },
  label_span: {
    display: 'flex',
  },
  total_break: {
    width: '25%',
    marginLeft: 0,
    border: '.5px solid #949393',
    '@media (max-width: 768px)': {
      width: '33%',
    },
  },
  full_width: {
    width: '100%',
  },
  operator: {
    fontSize: '1.5rem',
    paddingTop: '14px',
    paddingRight: '10px',
    margin: '0',
    '@media (max-width: 576px)': {
      fontSize: '12px',
      paddingRight: '3px',
    },
  },
  divider: {
    border: '.5px solid #000',
  },
}));

export default useStyles;
