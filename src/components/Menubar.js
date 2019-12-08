import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    menubar: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    }
})
);


export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" className={classes.menubar}>
                <Tabs value={value} onChange={handleChange} aria-label="menu bar" centered>
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="About Us" component={Link} to="/About" />
                    <Tab label="Contact" component={Link} to="/Contact" />
                </Tabs>
            </AppBar>
        </div>
    );
}