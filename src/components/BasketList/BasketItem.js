import React from "react";
import {IconButton, ListItem, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = (props) => {
    const {name, price, quantity, removeMerchandise, id} = props

    return (
        <ListItem>
            <Typography variant='body2'>
                {name} {price} грн. x {quantity}
            </Typography>
            <IconButton
                onClick={() => removeMerchandise(id)}
            >
               <CloseIcon/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
