import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';

const BookItem = (props) => {
    const {name, price, poster, setOrder} = props;

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

                <CardActions>
                    <Button variant='contained'
                            size='small'
                            onClick={() =>
                                setOrder({
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
