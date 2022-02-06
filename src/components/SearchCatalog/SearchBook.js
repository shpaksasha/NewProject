import React from 'react';
import {TextField} from "@mui/material";

const SearchBook = (props) => {

    const { onChange, value } = props;

    return <TextField
        sx={{zIndex: 0}}
        variant='outlined'
        type='search'
        label='Search...'
        fullWidth
        size='small'
        value={value}
        onChange={onChange}/>;
};

export default SearchBook;