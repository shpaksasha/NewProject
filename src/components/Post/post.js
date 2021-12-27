import React from 'react';
import {useStyles} from "./post.styles"


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
