import React from 'react';

const SearchBook = (props) => {

    const { onChange, value } = props;

    return <input type='search' value={value} onChange={onChange} />;
};

export default SearchBook;
