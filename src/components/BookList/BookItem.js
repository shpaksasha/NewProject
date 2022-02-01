import React from 'react';
import {Grid} from "@mui/material";

const BookItem = (props) => {
    const {name, price, setOrder} = props;

    return (
        <Grid item sm={12} md={4}>
            <img
                src={`https://via.placeholder.com/300x150.png?text=${name.slice(0, 10)}`}
                alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>Цена: {price} грн.</p>
                <button onClick={() =>
                    setOrder({
                        id: props.id,
                        name: props.name,
                        price: props.price,
                    })
                }>Купить
                </button>
            </div>
        </Grid>
    );
};

export default BookItem;
