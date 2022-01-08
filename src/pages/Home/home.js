import React, {useState} from 'react';
import {Post} from "../../components/Post/post";
import PostForm from "../../components/FormPost/postForm";
import {makeStyles} from "@mui/styles";
import {TextField} from "@mui/material";
import ModalWindow from "../../components/ModalWindow/window";


const useStyles = makeStyles(theme => ({
    heading: {
        textAlign: 'center',
        fontFamily: 'Regular 400',
        letterSpacing: '0.1em',
        wordSpacing: '0.4em',
    },
    root: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
    },
    field: {
        width: '1025px'
    }
}))

const Home = () => {
    const classes = useStyles()

    const [posts, setPost] = useState([
        {id: 1, title: 'Java Script', denotation: 'Hello Aleks'},
        {id: 2, title: 'React', denotation: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', denotation: 'Hello Larysa'},
    ])

    const [search, setSearch] = useState('')

    const createPost = (newPost) => {
        setPost([...posts, newPost])
    }
    const removePost = (post) => {
        setPost(posts.filter(elem => elem.id !== post.id))
    }

    return (

        <div>
            <div className={classes.root}>
                <TextField
                    className={classes.field}
                    helperText
                    size="small"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    id='1'
                    label="Search..."
                    multiline/>
            </div>

            <PostForm create={createPost}/>
            <ModalWindow>
                Hello World !!!!!!!!!!!!!!!!!!!!!!!!
            </ModalWindow>
            <div>
                {posts.length !== 0
                    ? <div>
                        <h2 className={classes.heading}>Список постов</h2>
                        {posts.map((item, index) =>
                            <Post remove={removePost} post={item} key={item.id} number={index + 1}/>
                        )}
                    </div>
                    : <h2 className={classes.heading}>Посты не найдены</h2>
                }
            </div>
        </div>
    )
};

export default Home;
