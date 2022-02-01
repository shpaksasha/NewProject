import React from 'react';
import BookItem from './BookItem';
import {Grid} from "@mui/material";

const BookList = (props) => {

    const {goods, setOrder} = props;

    return (
        <Grid container spacing={1}>
            {goods.map((item) => (
                <BookItem key={item.id} setOrder={setOrder} {...item}/>
            ))}
        </Grid>
    );
};

export default BookList;
