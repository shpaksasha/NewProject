import React from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {AppBar, Icon, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 1
    },
        link: {
            position: 'relative',
            textDecoration: 'none',
            color: '#828282',
            fontSize: '16px',
            lineHeight: '24px',
            fontFamily: 'Roboto, sans-serif'
        },

        linkActive: {
            paddingBottom: '5px',
            borderBottom: '2px solid #37474f',
            color: '#37474f',
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif'
        }
    }))


const Header = () => {
    const classes = useStyles();
    return (
            <AppBar position='static'>
            <Toolbar className={classes.root}>
                <Typography className={classes.icon}>
                    <Icon>
                        <AccountCircleIcon/>
                        <NavLink className={classes.eye} to='/'>

                        </NavLink>
                    </Icon>
                </Typography>
                <Typography>
                    <NavLink exact={true} className={classes.link} activeClassName={classes.linkActive} to='/'>
                        Home
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={classes.link} activeClassName={classes.linkActive} to='/about'>
                        About
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={classes.link} activeClassName={classes.linkActive} to='/faq'>
                        Authorization
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={classes.link} activeClassName={classes.linkActive} to='/server'>
                        Contacts
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={classes.link} activeClassName={classes.linkActive} to='/weather'>
                        FAQ
                    </NavLink>
                </Typography>
            </Toolbar>
            </AppBar>
    )
}

export {Header}
