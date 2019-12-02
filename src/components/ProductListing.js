import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    right: {
        marginLeft: 'auto',
    },
}));

export default function ProductListing({ product }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={product.name}
                subheader={product.subname}
            />
            <CardMedia
                className={classes.media}
                image={product.img}
                title="Product Image"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
                <Typography variant="h5" color="primary" component="p">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="contained" color="primary" size="small" className={classes.right}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
}