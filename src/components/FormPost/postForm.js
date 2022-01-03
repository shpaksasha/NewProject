import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    box: {
        margin: 30,
        justifyContent: 'space-around',
        display: 'flex',
        padding: '0px 10px'
    },
    field: {
        width: 400,
    },
    button: {
        maxHeight: 37,
        fontFamily: 'Roboto Condensed',
    }
}))

const PostForm = ({create}) => {
    const classes = useStyles();


    const [title, setTitle] = useState('')
    const [denotation, setDenotation] = useState('')

    function addNewPost(event) {
        event.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            denotation
        }
        create(newPost)
        // setPost([...posts, newPost])
        setTitle('')
        setDenotation('')
    }

    return (
        <div>
            <form>
                <Box className={classes.box}>
                    <TextField
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        helperText='Введите название'
                        id='1'
                        label='Название'
                        className={classes.field}
                        size='small'
                    />
                    <TextField
                        value={denotation}
                        onChange={event => setDenotation(event.target.value)}
                        helperText='Введите описание'
                        id='2'
                        label='Описание'
                        className={classes.field}
                        size='small'
                    />
                    <Button onClick={addNewPost} className={classes.button} size='small' variant='contained'
                            color='secondary'>Создать пост</Button>
                </Box>
            </form>
        </div>
    );
};

export default PostForm;
