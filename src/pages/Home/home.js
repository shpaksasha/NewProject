import React, {useState} from 'react';
import {Post} from "../../components/Post/post";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Hello Aleks'},
        {id: 2, title: 'React', body: 'Hello Vadym'},
        {id: 3, title: 'CSS, HTML', body: 'Hello Larysa'},
    ])

    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias aperiam atque blanditiis,
            cupiditate
            deleniti deserunt dolorem dolores eos esse facilis fugiat harum hic illum ipsum, itaque iure labore
            laboriosam minus modi mollitia nihil nisi numquam odit officia officiis omnis optio pariatur porro quas
            ratione recusandae repellendus, ut veniam voluptatem voluptates! Amet animi cum dicta in itaque
            laudantium
            modi mollitia nostrum obcaecati officiis pariatur, quis tempore totam vero vitae. Consequuntur
            dignissimos
            dolore dolorem error et in incidunt necessitatibus neque nobis odio, officiis pariatur, perferendis quis
            rerum sed similique sint tempora ut vel, veritatis! Ab at harum omnis porro tempora!

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
