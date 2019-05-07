import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import faker from 'faker';

const MemberRow = () => {
  return (
    <TableRow>
      <TableCell>
        {faker.fake('{{name.firstName}} {{name.lastName}}')}
      </TableCell>
      <TableCell>TBD</TableCell>
      <TableCell>{faker.internet.email()}</TableCell>
      <TableCell>{faker.phone.phoneNumberFormat()}</TableCell>
    </TableRow>
  );
};

export default MemberRow;
