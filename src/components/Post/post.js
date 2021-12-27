import React from 'react';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'block',
        marginTop: '20px',
        border: '2px solid black',
        alignItems: 'center'

    },
    description: {

        display: 'block',
        justifyContent: 'space-between',
        padding: '10px',
        alignItems: 'center',
    },
    button: {
        display: 'block',
        position: 'absolute',
        top: '50%',
        right: 0,
    }
}))

const Post = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.description}>
                <h1>Java Script</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque hic in maxime minima nulla porro
                    quibusdam, recusandae reprehenderit veniam?</p>
            </div>
            <div className={classes.button}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export {Post};
