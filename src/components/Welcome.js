import React from 'react';
import Image from 'react-image-resizer';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  headerText: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold'
  },
  root: {
    flexGrow: 1
  }
});

const Welcome = props => {
  const { classes } = props;

  return (
    <div className={`${classes.headerText} ${classes.root}`}>
      <Image
        style={{ margin: 'auto' }}
        src={process.env.PUBLIC_URL + '/images/cover.jpg'}
        height={500}
        width={500}
      />
      Welcome to Central Austin Speaking Club!
    </div>
  );
};

export default withStyles(styles)(Welcome);
