import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});

function AdvFilter(props) {
  const columns = [
    {
      name: 'Name',
      options: {
        filter: true
      }
    },
    {
      name: '$Cashname',
      options: {
        filter: true,
      }
    },
    {
      name: 'Email/Phone',
      options: {
        filter: false,
      }
    },
    {
      name: 'Salary',
      options: {
        filter: true,
        customBodyRender: (value) => {
          const nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });

          return nf.format(value);
        }
      }
    },
    {
      name: 'Amount',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'Pinging') {
            return (<Chip label="Pinging" color="secondary" />);
          }
          if (value === 'Complete') {
            return (<Chip label="Complete" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
  ];

  const data = [
    ['Gabby George', 'Business Analyst', '', 100000, 'Pinging'],
    ['Aiden Lloyd', 'Business Consultant', '', 200000, 'Pinging'],
    ['Jaden Collins', 'Attorney', '', 500000, 'Complete'],
    ['Franky Rees', 'Business Analyst', '', 50000, 'Pinging'],
    ['Aaren Rose', 'Business Consultant', '', 75000, 'unknown'],
    ['Blake Duncan', 'Business Management Analyst', '', 94000, 'Pinging'],
    ['Frankie Parry', 'Agency Legal Counsel', '', 210000, 'Complete'],
    ['Lane Wilson', 'Commercial Specialist', '', 65000, 'Pinging'],
    ['Robin Duncan', 'Business Analyst', '', 77000, 'unknown'],
    ['Mel Brooks', 'Business Consultant', '', 135000, 'Pinging'],
    ['Harper White', 'Attorney', '', 420000, 'Complete'],
    ['Kris Humphrey', 'Agency Legal Counsel', '', 150000, 'Pinging'],
    ['Frankie Long', 'Industrial Analyst', '', 170000, 'Pinging'],
    ['Brynn Robbins', 'Business Analyst', '', 90000, 'Pinging'],
    ['Justice Mann', 'Business Consultant', '', 33000, 'Complete'],
    ['Addison Navarro', 'Business Management Analyst', '', 295000, 'Complete'],
    ['Jesse Welch', 'Agency Legal Counsel', '', 100000, 'Pinging'],
    ['Eli Mejia', 'Commercial Specialist', '', 400000, 'Pinging'],
    ['Gene Leblanc', 'Industrial Analyst', '', 110000, 'Pinging'],
    ['Danny Leon', 'Computer Scientist', '', 220000, 'Complete'],
    ['Lane Lee', 'Corporate Counselor', '', 180000, 'unknown'],
    ['Jesse Hall', 'Business Analyst', '', 99000, 'Pinging'],
    ['Danni Hudson', 'Agency Legal Counsel', '', 90000, 'Pinging'],
    ['Terry Macdonald', 'Commercial Specialist', '', 140000, 'Pinging'],
    ['Justice Mccarthy', 'Attorney', '', 330000, 'Pinging'],
    ['Silver Carey', 'Computer Scientist', '', 250000, 'Pinging'],
    ['Franky Miles', 'Industrial Analyst', '', 190000, 'Pinging'],
    ['Glen Nixon', 'Corporate Counselor', '', 80000, 'Complete'],
    ['Gabby Strickland', 'Business Process Consultant', '', 45000, 'unknown'],
    ['Mason Ray', 'Computer Scientist', '', 142000, 'Pinging']
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: true,
    rowsPerPage: 10,
    page: 0
  };

  const { classes } = props;

  return (
    <div className={classes.table}>
      <MUIDataTable
        title="Employee list"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
