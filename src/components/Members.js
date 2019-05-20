import React from 'react';
import MemberTable from './MemberTable';
// import MemberSeach from './MemberSearch';
import SearchBar from './SearchBar';

const Members = () => {
  return (
    <div>
      <SearchBar />
      {/*<MemberSeach />*/}
      <MemberTable />
    </div>
  );
};

export default Members;
