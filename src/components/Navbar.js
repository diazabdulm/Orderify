import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  toolbar: {
    minHeight: 100,
    margin: theme.spacing(1)
  },
  menu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  language: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    fontSize: 35,
    [theme.breakpoints.down('xs')]: {
      fontSize: 25,
    },
  },
  fab: {
    margin: theme.spacing(1),
  },
  profile: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const Navbar = ({ cartItems }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menu}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.language}>
            Langugage USD
              </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <LocalMallOutlinedIcon fontSize="large" />ReactTransact
             </Typography>

          <Fab color="default" aria-label="cart" size="small" className={classes.fab}>
            <Badge badgeContent={cartItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Fab>
          <Fab color="default" aria-label="cart" size="small" className={classes.profile}>
            <Avatar>A</Avatar>
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => { dispatch({ type: 'ADD_TO_CART' }) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)