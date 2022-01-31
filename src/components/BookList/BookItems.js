import React from 'react';

const BookItems = (props) => {
    const {name, price, setOrder} = props;

    return (
        <div>
            <img
                src={`https://via.placeholder.com/300x150.png?text=${name.slice(0, 10)}`}
                alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>Цена: {price} грн.</p>
                <button onClick={() =>
                    setOrder({
                        id: props.id,
                        name: props.name,
                        price: props.price,
                    })
                }>Купить
                </button>
            </div>
        </div>
    );
};

export default BookItems;
