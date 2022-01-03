import React, {useState} from 'react';
import {Post} from "../../components/Post/post";
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

const Home = () => {

    const classes = useStyles();

    const [posts, setPost] = useState([
        {id: 1, title: 'Java Script', denotation: 'Hello Aleks'},
        {id: 2, title: 'React', denotation: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', denotation: 'Hello Larysa'},
    ])

    const [title, setTitle] = useState('')
    const [denotation, setDenotation] = useState('')


    function addNewPost(event) {
        event.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            denotation
        }

        setPost([...posts, newPost])
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

            <div>
                <h2 style={{textAlign: 'center'}}>Список постов</h2>
                {posts.map((item, index) =>
                    <Post number={index + 1} post={item} key={item.id}/>
                )}
            </div>
        </div>
    )
};

export default Home;
