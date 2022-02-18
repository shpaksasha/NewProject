import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import {Button, DialogActions, DialogContent} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    box: {
        boxSizing: 'border-box',
        height: '125px',
        maxWidth: '590px',
        display: 'block',
    },
    field: {
        display: 'block',
       textAlign: 'center',
        width: 250,
    },
    button: {
        display: 'block',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)'
    },

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
        <form>
            <DialogContent className={classes.box}>
                <TextField
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    helperText='Введіть назву'
                    id='1'
                    label='Назва'
                    className={classes.field}
                    size='small'
                    sx={{mr: 2}}
                />
                <TextField
                    value={denotation}
                    onChange={event => setDenotation(event.target.value)}
                    helperText='Введіть опис'
                    id='2'
                    label='Опис'
                    className={classes.field}
                    size='small'
                />
            </DialogContent>
            <DialogActions className={classes.button}>
                <Button onClick={addNewPost} size='small' variant='contained'
                        color='secondary'>Додати</Button>
            </DialogActions>
        </form>
    );
};

export default PostForm;
