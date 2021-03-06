import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import faker from 'faker';

const paths = [
  {
    name: 'Dynamic Leadership',
    description: 'Build strategic leadership and conflict resolution skills'
  },
  {
    name: 'Effective Coaching',
    description:
      'Build interpersonal communication, leadership and coaching skills'
  },
  {
    name: 'Innovative Planning',
    description: 'Build creative project management and communication skills'
  },
  {
    name: 'Leadership Development',
    description: 'Build communication and leadership skills'
  },
  {
    name: 'Motivational Strategies',
    description: 'Build motivational leadership and communication skills'
  },
  {
    name: 'Persuasive Influence',
    description: 'Build skills to lead in complex situations'
  },
  {
    name: 'Presentation Mastery',
    description: 'Build public speaking skills'
  },
  {
    name: 'Strategic Relationships',
    description: 'Build networking, leadership, and communication skills'
  },
  {
    name: 'Team Collaboration',
    description: 'Build collaborative leadership skills'
  },
  {
    name: 'Visionary Communication',
    description: 'Build innovative communication and leadership skills'
  }
];

// select single path randomly
const randomPath = () => paths[Math.floor(Math.random() * paths.length)].name;

// 1-3 random paths for each member
const memberPaths = () => {
  const numberOfPaths = Math.floor(Math.random() * 3) + 1,
    paths = new Set();

  for (let i = 0; i < numberOfPaths; i++) {
    paths.add(randomPath());
  }

  return [...paths].sort().join(', ');
};

const MemberRow = () => {
  return (
    <TableRow>
      <TableCell>
        {faker.fake('{{name.firstName}} {{name.lastName}}')}
      </TableCell>
      <TableCell>{memberPaths()}</TableCell>
      <TableCell>{faker.internet.email()}</TableCell>
      <TableCell>{faker.phone.phoneNumberFormat()}</TableCell>
    </TableRow>
  );
};

export default MemberRow;
