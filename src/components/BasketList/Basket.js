import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Basket = (props) => {
    const {openCard, closeCard, order, removeOrder} = props

    return (
        <Drawer anchor='right' open={openCard} onClose={closeCard}>
            <List>
               <ListItem>
                   <ListItemIcon>
                       <LocalGroceryStoreIcon/>
                   </ListItemIcon>
                   <ListItemText primary='Корзина'/>
               </ListItem>
            </List>
        </Drawer>
    );
};

export default Basket;
