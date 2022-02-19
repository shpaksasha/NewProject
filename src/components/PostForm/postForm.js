import React, {useState} from 'react';
import {TextField, DialogContent} from "@mui/material";
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
        border: 'none',
        borderRadius: '4px',
        color: '#ffffff',
        backgroundColor: '#0c96cf',
        padding: '11px 32px',
        cursor: 'pointer',
        display: 'block',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        '&:hover': {
            backgroundColor: '#0881b8'
        }
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
                <button className={classes.button} onClick={addNewPost}>Додати</button>
        </form>
    );
};

export default PostForm;
