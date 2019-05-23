import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
});

const pastDate = () => String(faker.date.past()).slice(4, 15);

const Dashboard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}>
            Name: {faker.fake('{{name.firstName}} {{name.lastName}}')}
          </Paper>
          <Paper className={classes.paper}>
            Email: {faker.internet.email()}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            Mentor: {faker.fake('{{name.firstName}} {{name.lastName}}')}
          </Paper>
          <Paper className={classes.paper}>
            Phone: {faker.phone.phoneNumberFormat()}
          </Paper>
        </Grid>
      </Grid>

      {/* spacing between sections */}
      <Grid container spacing={10}>
        <Grid item xs />
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs />
      </Grid>

      {/*Beginning of second section header*/}
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}>Presentation Mastery</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            To Do: Level 3 Persuasive Speaking
          </Paper>
        </Grid>
      </Grid>
      {/*Beginning of second section body*/}
      <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper}>
            Level 1 <br />
            <br /> Status: Completed <br />
            <br /> Required: <br />
            <i className="material-icons">check</i>Ice Breaker {pastDate()}
            <br />
            <i className="material-icons">check</i>Evaluation and Feedback (Part
            1) {pastDate()}
            <br />
            <i className="material-icons">check</i>Evaluation and Feedback (Part
            2) {pastDate()}
            <br />
            <i className="material-icons">check</i>Evaluation and Feedback (Part
            3) {pastDate()}
            <br />
            <i className="material-icons">check</i>Researching and Presenting{' '}
            {pastDate()}
            <br />
            <br /> Optional: none
          </Paper>
        </Grid>
      </Grid>

      {/*Beginning of third section*/}
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Recent Activities</Paper>
          {/*<Paper className={classes.paper}>(member timeline)</Paper>*/}
        </Grid>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
