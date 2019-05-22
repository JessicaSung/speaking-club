import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavBar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MenuIcon
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? 'main-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            />
            <Menu
              id="main-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <Link to="/" onClick={this.handleClose}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/dashboard" onClick={this.handleClose}>
                <MenuItem>Dashboard</MenuItem>
              </Link>
              <Link to="/edit" onClick={this.handleClose}>
                <MenuItem>Edit profile</MenuItem>
              </Link>
              <Link to="/members" onClick={this.handleClose}>
                <MenuItem>View members</MenuItem>
              </Link>
            </Menu>
            <Typography color="inherit" className={classes.flex}>
              Central Austin Speaking Club
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
