import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="menu bar" centered>
          <Tab label="T-Shirts" />
          <Tab label="Hats"/>
          <Tab label="Accessories"/>
        </Tabs>
      </AppBar>
    </div>
  );
}