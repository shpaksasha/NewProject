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

    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Hello Aleks'},
        {id: 2, title: 'React', body: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', body: 'Hello Larysa'},
    ])

    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias aperiam atque blanditiis,
                cupiditate
                deleniti deserunt dolorem dolores eos esse facilis fugiat harum hic illum ipsum, itaque iure labore
                laboriosam minus modi mollitia nihil nisi numquam odit officia officiis omnis optio pariatur porro quas
                ratione recusandae repellendus, ut veniam voluptatem voluptates! Amet animi cum dicta in itaque
                laudantium
            </p>
            <form>
                <Box className={classes.box}>
                    <TextField
                        helperText='Введите описание'
                        id='demo'
                        label='Описание'
                        className={classes.field}
                        size='small'
                    />
                    <TextField
                        helperText='Введите название'
                        id='demo-helper'
                        label='Название'
                        className={classes.field}
                        size='small'
                    />
                    <Button className={classes.button} size='small' variant='contained' color='secondary'>Создать пост</Button>
                </Box>
            </form>
            <div>

                <h2 style={{textAlign: 'center'}}>Список постов</h2>
                {posts.map(item =>
                    <Post post={item} key={item.id}/>
                )}
            </div>

        </div>
    )
};

export default Home;
