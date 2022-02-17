import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Stack, TextField, Pagination, Link} from '@mui/material';
const Base_Url = 'http://hn.algolia.com/api/v1/search?'



const Article = () => {
    const [post, setPost] =useState([])
    const [query, setQuery] =useState('')
    const [page, setPage] =useState(1)
    const [pageQty, setPageQty] =useState(0)

    useEffect(() => {
        axios.get(Base_Url + `query=${query}&page=${page-1}`).then(({data}) => {
            console.log(data)
            setPost(data.hits)
            setPageQty(data.nbPages)

            if (data.nbPages < page) {
                setPage(1)
            }
        })
    },[query, page])

    return (
        <Container sx={{mt: '30px'}}>
            <TextField
            fullWidth
            size='small'
            label='article search'
            value={query}
            onChange={event => setQuery(event.target.value)}
            />
            <Stack spacing={3}>
                {!!pageQty && (
                    <Pagination
                        count={pageQty}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                        sx={{marginY: 3, marginX: 'auto'}}
                        color='secondary'
                    />
                )}
                {
                    post.map(item => (
                        <Link key={item.objectId} href={item.url}>
                            {item.title}
                        </Link>
                    ))
                }
            </Stack>
        </Container>
    );
};

export default Article;
