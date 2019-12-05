import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  language: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    fontSize: 35,
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.language}>
            Langugage USD
              </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <LocalMallOutlinedIcon fontSize="large" />Orderify
             </Typography>

          <Fab color="default" aria-label="cart" size="small" className={classes.fab}>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Fab>
          <Fab color="default" aria-label="cart" size="small" className={classes.fab}>
            <Avatar>A</Avatar>
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
}