import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class Textfield extends Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { id, label, placeholder } = this.props;

    return (
      <TextField
        id={id}
        label={label}
        style={{ margin: 8 }}
        placeholder={placeholder}
        // helperText="Some important text"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}

Textfield.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Textfield);
