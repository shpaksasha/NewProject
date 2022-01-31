import React, { useState } from 'react';
import BookList from '../../components/BookList/BookList';
import BasketList from '../../components/BasketList/BasketList';
import SearchBook from '../../components/SearchBook/SearchBook';

import {books} from '../../../server/books'


const Books = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(books);

    const handleChange = (event) => {
        if (!event.target.value) {
            setProducts(books);
            setSearch('');
            return;
        }

        setSearch(event.target.value);

        setProducts(
            products.filter((books) =>
                books.name.toLowerCase().includes(event.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
    };

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <div className='App'>
            <div className='container'>
                <SearchBook
                    value={search}
                    onChange={handleChange}
                />
                <BookList
                    goods={products}
                    setOrder={addToOrder}
                />
                <BasketList
                    order={order}
                    setOrder={removeFromOrder}
                />
            </div>
        </div>
    );
};

export default Books;
