import React from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {AppBar, Toolbar, Typography} from "@mui/material";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '0rem',
        display: 'flex',
        alignItems: 'center',

    },
    link: {
        padding: '0px 40px',
        textAlign: 'center',
        position: 'relative',
        textDecoration: 'none',
        color: '#ffeb3b',
        fontSize: '25px',
        // lineHeight: '20px',
        fontFamily: 'Roboto, sans-serif',
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '12px',
        //     lineHeight: '18px',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     justifyContent: 'space-between',
        //     fontSize: '25px',
        //     lineHeight: '45px',
        // }
    },
}));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography component="div"><NavLink className={classes.link} to='/'>Home</NavLink></Typography>
                    <Typography component="div"><NavLink className={classes.link}
                                                         to='/about'>About</NavLink></Typography>
                    <Typography component="div"><NavLink className={classes.link} to='/faq'>FAQ</NavLink></Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export {Header}
