import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
    }
}))


const Search = () => {
    const classes = useStyles()
    const [search, setSearch] = useState('')

    return (
        <div>
            <div className={classes.root}>
                <TextField
                    sx={{zIndex: 0}}
                    variant='outlined'
                    type='search'
                    fullWidth
                    size='small'
                    label='Search...'
                    autoComplete
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
            </div>
        </div>
    );
};

export {Search};
