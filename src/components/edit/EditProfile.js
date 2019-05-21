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

// const FormRow = props => {
//   const { classes } = props;

//   return (
//     <React.Fragment>
//       <Grid item xs={4}>
//         <Paper>item</Paper>
//       </Grid>
//       <Grid item xs={4}>
//         <Paper>item</Paper>
//       </Grid>
//       <Grid item xs={4}>
//         <Paper>item</Paper>
//       </Grid>
//     </React.Fragment>
//   );
// };

// FormRow.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// const ActivityGrid = props => {
//   const { classes } = props;

//   console.log('ActivityGrid', classes);

//   return (
//     <div>
//       <Grid container spacing={8}>
//         <Grid container item xs={12} spacing={24}>
//           <FormRow classes={classes} />
//         </Grid>
//         <Grid container item xs={12} spacing={24}>
//           <FormRow classes={classes} />
//         </Grid>
//         <Grid container item xs={12} spacing={24}>
//           <FormRow classes={classes} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// ActivityGrid.propTypes = {
//   classes: PropTypes.object.isRequired
// };

function EditProfile(props) {
  const { classes } = props;

  console.log('editprofile', classes);

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper}>TID:</Paper>
          <Paper className={classes.paper}>Name:</Paper>
          <Paper className={classes.paper}>Email:</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Join Date:</Paper>
          <Paper className={classes.paper}>Mentor:</Paper>
          <Paper className={classes.paper}>Phone:</Paper>
        </Grid>
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
            <i className="material-icons">check</i>Evaluation and Feedback (Part
            1)
            <br />
            <i className="material-icons">check</i>Evaluation and Feedback (Part
            2)
            <br />
            <i className="material-icons">check</i>Evaluation and Feedback (Part
            3)
            <br />
            <i className="material-icons">check</i>Researching and Presenting{' '}
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
          <Paper className={classes.paper}>Toastmaster</Paper>
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

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfile);
