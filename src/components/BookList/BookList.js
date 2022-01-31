import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {

    const {goods, setOrder} = props;

    return (
        <div>
            {goods.map((item) => (
                <BookItem key={item.id} setOrder={setOrder} {...item}/>
            ))}
        </div>
    );
};

export default BookList;
