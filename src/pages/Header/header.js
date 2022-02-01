import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {AppBar, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const useStyles = makeStyles(theme => ({
    root: {
        boxSizing: 'border-box',
        position: 'sticky',
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        zIndex: 1,
        top: 0,
    },
    appBar: {

        backgroundColor: '#b8dfdf',
        padding: '0rem 6.25rem',
        justifyContent: 'space-around',
    },
    shadow: {
        boxShadow: '0px 12px 10px 10px rgba(0,0,0,0.30)'
    },
    link: {
        position: 'relative',
        textDecoration: 'none',
        color: '#0a3f89',
        fontSize: '17px',
        lineHeight: '24px',
        fontFamily: 'Roboto, sans-serif',
    },

    linkActive: {
        textDecoration: 'none',
        padding: '3px',
        backgroundColor: '#0a3f89',
        borderRadius: '5px',
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
        fontFamily: 'Late, sans-serif',
        paddingLeft: '32px',
    },
    navLink: {
        marginRight: '255px',
    }
}))


const Header = () => {

    const [isOffset, setOffset] = useState(window.pageYOffset);

    const scrollFunction = () => {
        setOffset(window.pageYOffset)
        console.log(isOffset)
    }

    useEffect(() => {
      window.addEventListener('scroll', scrollFunction)
        return () => {
           window.removeEventListener('scroll',scrollFunction);
        }
    },[scrollFunction])

    const classes = useStyles();
    return (
        <AppBar className={`${classes.root} ${isOffset > 0 ? classes.shadow : null}`}>
            <Toolbar className={classes.appBar}>
                <NavLink className={classes.navLink} to='/'>
                    <Typography className={classes.icon}>
                        <AccountCircleIcon style={{fontSize: '31px'}}/>
                        <span className={classes.account}><b>Account</b></span>
                    </Typography>
                </NavLink>
                <Typography>
                    <NavLink  className={({isActive}) => (isActive ? classes.linkActive : classes.link)} to='/'>
                        Home
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={({isActive}) => (isActive ? classes.linkActive : classes.link)} to='/about'>
                        About
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={({isActive}) => (isActive ? classes.linkActive : classes.link)} to='/book'>
                        Catalog
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={({isActive}) => (isActive ? classes.linkActive : classes.link)} to='/server'>
                        Contacts
                    </NavLink>
                </Typography>
                <Typography>
                    <NavLink className={({isActive}) => (isActive ? classes.linkActive : classes.link)} to='/weather'>
                        FAQ
                    </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export {Header}
