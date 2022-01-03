import React, {useState} from 'react';
import {Post} from "../../components/Post/post";
import PostForm from "../../components/FormPost/postForm";


const Home = () => {


    const [posts, setPost] = useState([
        {id: 1, title: 'Java Script', denotation: 'Hello Aleks'},
        {id: 2, title: 'React', denotation: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', denotation: 'Hello Larysa'},
    ])

    const createPost = (newPost) => {
        setPost([...posts, newPost])
    }
    const removePost = (post) => {
      setPost(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <PostForm create={createPost}/>
            <div>
                <h2 style={{textAlign: 'center'}}>Список постов</h2>
                {posts.map((item, index) =>
                    <Post remove={removePost} post={item} key={item.id} number={index + 1}/>
                )}
            </div>
        </div>
    )
};

export default Home;
