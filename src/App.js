import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import products from './sampledata';
import './App.css';

function App() {
  return (
  <div className='test'>
    <Navbar />
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-evenly"
      alignItems="center"
      style={{ width: '95%', margin: '20px auto' }}
    >
      <Grid item xs={12} sm={6} lg={3}>
        <ProductListing product={products[0]} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ProductListing product={products[1]} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ProductListing product={products[0]} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ProductListing product={products[1]} />
      </Grid>
    </Grid>
  </div>
);
}

export default App;
