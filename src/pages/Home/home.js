import React, {useEffect, useState} from 'react';
import {Post} from "../../components/Post/post";
import PostForm from "../../components/FormPost/postForm";
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import ModalWindow from "../../components/ModalWindow/window";
import {Search} from "../../components/Search/search";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    heading: {
        textAlign: 'center',
        fontFamily: 'Regular 400',
        letterSpacing: '0.1em',
        wordSpacing: '0.4em',
    },

    mainButton: {
        marginTop: '20px',
        textAlign: 'center',
    }
}))

const Home = () => {
    const classes = useStyles()

    const [posts, setPost] = useState([
        {id: 1, title: 'Java Script', denotation: 'Hello Aleks'},
        {id: 2, title: 'React', denotation: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', denotation: 'Hello Larysa'},
    ])

    useEffect(()=> {
        fetchPost()
    },[])

    const [modal, setModal] = useState(false)

async function fetchPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(response.data)
    setPost(response.data)
}

    const createPost = (newPost) => {
        setPost([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPost(posts.filter(elem => elem.id !== post.id))
    }

    return (

        <div>
            <Search/>
            <div className={classes.mainButton}>
                <button onClick={fetchPost}>Get</button>
                <Button variant='contained' onClick={() => setModal(true)}>Создать пост</Button></div>

            <ModalWindow visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </ModalWindow>

            <div>
                {posts.length !== 0
                    ? <div>
                        <TransitionGroup>
                            <h2 className={classes.heading}>Список постов</h2>
                            {posts.map((item, index) =>
                                <CSSTransition
                                    key={item.id}
                                    timeout={900}
                                    classNames="post"
                                >
                                    <Post remove={removePost} post={item} number={index + 1}/>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>
                    : <h2 className={classes.heading}>Посты не найдены</h2>
                }
            </div>
        </div>
    )
};

export default Home;
