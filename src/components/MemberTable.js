import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import MemberRow from './MemberRow';

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getSorting = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

const columnNames = [
  { id: 'name', label: 'Name' },
  { id: 'path', label: 'Path' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' }
];

class MemberTableHead extends Component {
  createSortHandler = property => event => {
    event.preventDefault();

    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columnNames.map(column => {
            return (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip title="Sort" placement={'bottom-end'} enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

MemberTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});

class MemberTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'name'
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { classes } = this.props;
    const { order, orderBy } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <MemberTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
            <MemberRow />
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

MemberTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MemberTable);
