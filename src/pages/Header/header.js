import React from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {AppBar, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-around',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 1
    },
    link: {
        position: 'relative',
        textDecoration: 'none',
        color: '#0a3f89',
        fontSize: '17px',
        lineHeight: '24px',
        fontFamily: 'Roboto, sans-serif'
    },

    linkActive: {
        // paddingBottom: '5px',
        // borderBottom: '3px solid black',
        color: '#ffffff',
        fontSize: '17px',
        fontFamily: 'Roboto, sans-serif'
    },
    icon: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    account: {
        position: 'absolute',
        width: '100%',
        color: '#1b397a',
        fontSize: '14px',
        fontFamily: 'Lato, sans-serif',
        paddingLeft: '32px',
    },
}))


const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar className={classes.root}>
                <NavLink to='/'>
                    <Typography className={classes.icon}>
                        <AccountCircleIcon style={{fontSize: '31px'}}/>
                        <span className={classes.account}><b>Account</b></span>
                    </Typography>
                </NavLink>
                <Typography>
                    <NavLink className={classes.link} activeClassName={classes.linkActive} to='/'>
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
