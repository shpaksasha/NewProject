import React, {useState} from 'react';
import BookList from '../../components/BookList/Book';
import SearchBook from '../../components/SearchCatalog/SearchBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {goods} from '../../data/goods'
import Basket from "../../components/BasketList/Basket";
import {Button} from "@mui/material";

const CatalogBooks = () => {
    const [merchandise, setMerchandise] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCardOpen, setCardOpen] = useState(false)

    const handleChange = (event) => {
        if (!event.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(event.target.value);

        setProducts(
            products.filter(goods =>
                goods.name.toLowerCase().includes(event.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = merchandise.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = merchandise[indexInOrder].quantity + 1;

            setMerchandise(merchandise.map((item) => {
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
            setMerchandise([
                    ...merchandise,
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

    const removeMerchandise = (goodsItem) => {
        setMerchandise(merchandise.filter((item) => item.id !== goodsItem));
    };

    const handleCard = () => {
        setCardOpen(true)
    };

    return (
        <div>
            <div>
                <SearchBook value={search} onChange={handleChange}/>
                <BookList goods={products} setMerchandise={addToOrder}/>
                <Button onClick={handleCard} variant='outlined' endIcon={<ShoppingCartIcon/>}>
                    Корзина
                </Button>
            </div>
            <Basket openCard={isCardOpen} closeCard={() => setCardOpen(false)} merchandise={merchandise}
                    removeMerchandise={removeMerchandise}/>
        </div>
    );
};

export default CatalogBooks;
