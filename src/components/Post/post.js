import React from 'react';
import {useStyles} from "./post.styles"
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";


const Post = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.description}>
                <Typography sx={{fontSize: '16px', fontWeight: 600}}>{props.number}. {props.post.title}</Typography>
                <Typography sx={{mt: 1, fontSize: '15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque hic in maxime minima nulla porro
                    quibusdam, recusandae reprehenderit veniam?
                    <Typography>{props.post.denotation}</Typography>
                </Typography>
            </CardContent>
            <CardActions className={classes.button}>
                <Button onClick={() => {props.remove(props.post)}} variant='contained' size='small'>
                    Удалить
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
