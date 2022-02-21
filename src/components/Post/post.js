import React from 'react';
import {useStyles} from "./post.styles"
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";


const Post = (props) => {
    const classes = useStyles();
    const {number, post, remove} = props
    return (
        <Card className={classes.root}>
            <CardContent className={classes.description}>
                <Typography sx={{fontSize: '16px', fontWeight: 600}}>{number}. {post.title}</Typography>
                <Typography sx={{mt: 1, fontSize: '14px'}}>{post.body}</Typography>
                <Typography>{post.denotation}</Typography>
            </CardContent>
            <CardActions className={classes.button}>
                <Button onClick={() => {
                    remove(post)
                }} variant='contained' size='small'>
                    Удалить
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
