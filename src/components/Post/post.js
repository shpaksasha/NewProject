import React from 'react';
import {useStyles} from "./post.styles"
import {Button} from "@mui/material";


const Post = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.description}>
                <h4>{props.number}. {props.post.title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque hic in maxime minima nulla porro
                    quibusdam, recusandae reprehenderit veniam?</p>
                <p>{props.post.denotation}</p>
            </div>
            <div className={classes.button}>
                <Button onClick={() => {props.remove(props.post)}} variant="contained" size="small">
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export {Post};
