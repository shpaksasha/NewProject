import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    action: {
        display: "flex",
        bottom: 0,
        left: 0
    }
}))

const BookItem = (props) => {
    const classes = useStyles();
    const {name, price, poster, setMerchandise} = props;

    return (
        <Grid item sm={12} md={4}>
            <Card sx={{minHeight: 342}}>
                <CardMedia
                    image={poster}
                    title={name}
                    alt={name}
                    sx={{height: 175}}
                />
                <CardContent>
                    <Typography variant='h6' component='div'>{name}</Typography>
                    <Typography variant='body1'>Цена: {price} грн.</Typography>
                </CardContent>

                <CardActions className={classes.action}>
                    <Button variant='contained'
                            size='small'
                            onClick={() =>
                                setMerchandise({
                                    id: props.id,
                                    name: props.name,
                                    price: props.price,
                                })
                            }>Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default BookItem;
