import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MemberRow from './MemberRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const MemberTable = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Path</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
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
};

MemberTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MemberTable);
