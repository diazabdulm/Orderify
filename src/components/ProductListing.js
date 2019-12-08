import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
    media: {
        paddingTop: '100%',
    },
    card: {
        paddingBottom: '1%',
    },
    right: {
        marginLeft: 'auto',

    },
    cart: {
        marginLeft: 'auto',
        marginBottom: '-20%',
    }
}));

const ProductListing = ({ product, addToCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={product.img}
                title="Product Image"
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} container direction="column" >
                        <Fab color="primary" id="test1" aria-label="add" className={classes.cart} onClick={addToCart}>
                            <ShoppingCartIcon />
                        </Fab>
                    </Grid>

                    <Grid item xs={12} container direction="column">
                        <Typography variant="h6" component="p" noWrap>
                            {product.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} container direction="column">
                        <Typography variant="subtitle1" color="primary" component="h6">
                            ${product.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={7} container direction="column">
                        <Rating
                            name="product-rating"
                            value={product.rating}
                            precision={0.5}
                            readOnly
                            className={classes.right}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: () => { dispatch({ type: 'ADD_TO_CART' }) }
    }
}

export default connect(null, mapDispatchToProps)(ProductListing)