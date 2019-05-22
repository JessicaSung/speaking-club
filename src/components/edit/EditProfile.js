import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';
import AddPath from './AddPath';
import Datepicker from './Datepicker';
import Dropdown from './Dropdown';
import Textfield from './Textfield';

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

class EditProfile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Textfield
                id="scid"
                label="SCID"
                placeholder="Speaking Club ID"
              />
              <Textfield id="name" label="Name" placeholder="" />
              <Textfield
                id="email"
                label="Email"
                placeholder="abc@example.com"
              />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              {/* 2nd column of the first section */}
              <Datepicker id="join-date" label="Join Date" />
              <Dropdown />
              <Textfield
                id="phone"
                label="Phone"
                placeholder="(xxx) xxx-xxxx"
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs />
        </Grid>
        {/*Beginning of second section*/}
        <Grid container spacing={10}>
          <Grid item xs>
            <Paper className={classes.paper}>
              Presentation Mastery <br />
              <br />
              Level 1 <br />
              <br /> Status:
              <br />
              <br /> Required: <br />
              <i className="material-icons">check</i>Ice Breaker
              <br />
              <i className="material-icons">check</i>Evaluation and Feedback
              (Part 1)
              <br />
              <i className="material-icons">check</i>Evaluation and Feedback
              (Part 2)
              <br />
              <i className="material-icons">check</i>Evaluation and Feedback
              (Part 3)
              <br />
              <i className="material-icons">check</i>Researching and Presenting{' '}
              <br />
              <br /> Optional: none
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <AddPath />
          </Grid>
        </Grid>
        {/*Beginning of third section*/}
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Recent Activities</Paper>

            {/* column 1 of recent activities */}
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs>
            <Paper className={classes.paper}>{pastDate()}</Paper>
            <Paper className={classes.paper}>{pastDate()}</Paper>
            <Paper className={classes.paper}>{pastDate()}</Paper>
            <Paper className={classes.paper}>{pastDate()}</Paper>
            <Paper className={classes.paper}>{pastDate()}</Paper>
            <Paper className={classes.paper}>{pastDate()}</Paper>
            <Paper className={classes.paper}>{pastDate()}</Paper>
          </Grid>
          {/* column 2 of recent activities */}
          <Grid item xs>
            <Paper className={classes.paper}>Meeting Leader</Paper>
            <Paper className={classes.paper}>Evaluator</Paper>
            <Paper className={classes.paper}>PM1, Research and Planning</Paper>
            <Paper className={classes.paper}>
              PM1, Evaluation and Feedback (Part 2)
            </Paper>
            <Paper className={classes.paper}>
              PM1, Evaluation and Feedback (Part 3)
            </Paper>
            <Paper className={classes.paper}>Grammarian</Paper>
            <Paper className={classes.paper}>
              PM1, Evaluation and Feedback (Part 1)
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Edit / Delete</Paper>
            <Paper className={classes.paper}>Edit / Delete</Paper>
            <Paper className={classes.paper}>-</Paper>
            <Paper className={classes.paper}>-</Paper>
            <Paper className={classes.paper}>-</Paper>
            <Paper className={classes.paper}>Edit / Delete</Paper>
            <Paper className={classes.paper}>-</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfile);
