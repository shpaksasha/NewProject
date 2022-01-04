import React, {useState} from 'react';
import {Post} from "../../components/Post/post";
import PostForm from "../../components/FormPost/postForm";
import {makeStyles} from "@mui/styles";
import {TextField} from "@mui/material";

const useStyles = makeStyles(htem => ({
    heading: {
        textAlign: 'center',
        fontFamily: 'Regular 400',
        letterSpacing: '0.1em',
        wordSpacing: '0.4em',
    }
}))

const Home = () => {
    const classes = useStyles()

    const [posts, setPost] = useState([
        {id: 1, title: 'Java Script', denotation: 'Hello Aleks'},
        {id: 2, title: 'React', denotation: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', denotation: 'Hello Larysa'},
    ])

    const createPost = (newPost) => {
        setPost([...posts, newPost])
    }
    const removePost = (post) => {
        setPost(posts.filter(elem => elem.id !== post.id))
    }

    return (
        <div>
            <TextField
                id='1'
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
            />
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <div>
                    <h2 className={classes.heading}>Список постов</h2>
                    {posts.map((item, index) =>
                        <Post remove={removePost} post={item} key={item.id} number={index + 1}/>
                    )}
                </div>
                :
                <h2 className={classes.heading}>Посты не найдены</h2>
            }
        </div>
    )
};

export default Home;
