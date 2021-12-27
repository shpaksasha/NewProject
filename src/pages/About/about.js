import React, {useState} from 'react';


const About = () => {

    const [like, setLikes] = useState(0)
    console.log(like)
    console.log(setLikes)


    function increment() {
        setLikes(like + 1)
    }


    function decrement() {
        setLikes(like - 1)
    }

    return (

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ex iste quis quos? Aspernatur aut
                consectetur
                consequatur debitis eaque est, nam nemo omnis repellendus reprehenderit vel veniam. Eum ex excepturi
                laboriosam natus nesciunt pariatur rem suscipit? Adipisci architecto atque aut consectetur consequuntur
                dicta eos esse expedita facilis fugiat harum hic ipsa ipsam ipsum iusto magnam non obcaecati odio
                perspiciatis possimus praesentium quaerat quas reiciendis repudiandae sapiente, similique unde vel.
                Doloremque pariatur, sequi. A aliquid doloremque dolores expedita facere harum ipsa laudantium magni
                molestiae nemo, officia placeat, quae quas quod recusandae reiciendis rerum sed, similique. Accusantium
                doloribus ea est fuga ipsa?</p>
            <h4>{like}</h4>
            <button onClick={increment}>More</button>
            <button onClick={decrement}>Less</button>

        </div>
    )
};

export default About;
