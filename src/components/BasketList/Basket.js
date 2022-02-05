import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {makeStyles} from "@mui/styles";
import BasketItem from "./BasketItem";

const useStyles = makeStyles(theme => ({
    itemText: {
        textAlign: 'center',
        color: '#ffffff',
    }
}))

const Basket = (props) => {
    const classes = useStyles()
    const {openCard, closeCard, merchandise, removeMerchandise} = props

    return (
        <Drawer anchor='left' open={openCard} onClose={closeCard}>
            <List sx={{width: 275}}>
                <ListItem sx={{backgroundColor: '#039be5'}}>
                    <ListItemText className={classes.itemText} primary='Корзина'/>
                    <ListItemIcon>
                        <LocalGroceryStoreIcon sx={{color: '#ffffff'}}/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                {!merchandise.length ?
                    <ListItem>Корзина пуста</ListItem>
                    :
                    <div>
                        {merchandise.map(item => <BasketItem {...item} key={item.name}
                                                             removeMerchandise={removeMerchandise}/>)}
                        <Divider/>
                        <ListItem>
                            <Typography sx={{fontWeight: 600}}>
                                Общая стоимость:{' '}
                                {merchandise.reduce((reducer, item) => {
                                    return reducer + item.price * item.quantity
                                }, 0)}{' '}
                                грн.
                            </Typography>
                        </ListItem>
                    </div>
                }
            </List>
        </Drawer>
    );
};

export default Basket;
