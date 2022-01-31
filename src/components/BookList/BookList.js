import React from 'react';
import BookItems from './BookItems';

const BookList = (props) => {

    const {goods, setOrder} = props;

    return (
        <div>
            {goods.map((item) => (
                <BookItems key={item.id} setOrder={setOrder} {...item}/>
            ))}
        </div>
    );
};

export default BookList;
