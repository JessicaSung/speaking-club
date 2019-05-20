import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class MemberSeach extends Component {
  state = { query: '', column: 'name' };

  handleChange = name => event => {
    event.preventDefault();

    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TextField
          name="query"
          id="search-member"
          label="Search"
          type="search"
          margin="normal"
          value={this.state.query}
          onChange={this.handleChange('query')}
        />
        <Select
          style={{ marginTop: '32px' }}
          name="column"
          value={this.state.column}
          onChange={this.handleChange('column')}
          input={<Input name="column" id="filter-member" />}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="path">Path</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
        </Select>
      </div>
    );
  }
}

export default withStyles(styles)(MemberSeach);
