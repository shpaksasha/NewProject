import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {makeStyles} from "@mui/styles";

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
            </List>

        </Drawer>
    );
};

export default Basket;
