import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    justifyContent: 'center'
  },
  input: {
    display: 'none'
  }
});

const AddPath = props => {
  const { classes } = props;
  return (
    <div justify="center">
      <Button variant="contained" color="secondary" className={classes.button}>
        Add Another Path
      </Button>
    </div>
  );
};

AddPath.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddPath);
