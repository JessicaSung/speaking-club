import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

class Dropdown extends React.Component {
  state = {
    mentor: '',
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-mentor-simple"
          >
            Mentor
          </InputLabel>
          <Select
            value={this.state.mentor}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="mentor"
                id="outlined-mentor-simple"
              />
            }
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Isaac Lee</MenuItem>
            <MenuItem value={20}>Jessica Sung</MenuItem>
            <MenuItem value={30}>Ryan Comer</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dropdown);
