import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductListing from './ProductListing';
import products from '../sampledata';

export default function FeaturesBox() {
    return (
        <div>
            <Grid
                container
                spacing={4}
                direction="row"
                justify="space-evenly"
                alignItems="center"
                style={{ width: '75%', margin: '20px auto' }}
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