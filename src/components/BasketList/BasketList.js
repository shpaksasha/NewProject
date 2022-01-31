import React from "react";
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const { order, setOrder } = props;

    if (!order.length) {
        return (
            <ul>
                <li>Корзина</li>
                <li>Товаров нет</li>
            </ul>
        )
    }

    return (
        <ul>
            <li>Корзина</li>
            {order.map((item, index) => (
                <BasketItem key={index} setOrder={setOrder} {...item}/>
            ))}
            <li>
                Общая стоимость:{' '}
                {order.reduce((reducer, item) => {
                    return reducer + item.price * item.quantity;
                }, 0)}{' '}
                грн.
            </li>
        </ul>
    );
};

export default BasketList;
