import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
    },
    field: {
        width: '1025px'
    }
}))


const Search = () => {
    const classes = useStyles()
    const [search, setSearch] = useState('')

    return (
        <div>
            <div className={classes.root}>
                <TextField
                    className={classes.field}
                    helperText
                    size="small"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    id='1'
                    label="Search..."
                    multiline/>
            </div>
        </div>
    );
};

export {Search};
