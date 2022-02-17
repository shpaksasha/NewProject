import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Grid, Link, Pagination, TextField} from '@mui/material';
const Base_Url = 'http://hn.algolia.com/api/v1/search?'


const Article = () => {
    const [post, setPost] = useState([])
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
        axios.get(Base_Url + `query=${query}&page=${page - 1}`).then(({data}) => {
            console.log(data)
            setPost(data.hits)
            setPageQty(data.nbPages)

            if (data.nbPages < page) {
                setPage(1)
            }
        })
    }, [query, page])

    return (
        <Container sx={{mt: '30px'}}>
            <TextField
                fullWidth
                size='small'
                label='article search'
                value={query}
                onChange={event => setQuery(event.target.value)}
            />

            <Grid container rowSpacing={3} columnSpacing={3}>
                {!!pageQty && (
                    <Grid container>
                        <Pagination
                            count={pageQty}
                            page={page}
                            onChange={(_, num) => setPage(num)}
                            sx={{margin:'52px auto 25px'}}
                            color='secondary'
                        />
                    </Grid>
                )}
                {
                    post.map(item => (
                        <Grid item md={6}>
                            <Link href={item.url} key={item.objectId} target='__blank'
                                  sx={{textDecoration: 'none', color: 'black', fontSize: '14px'}}>
                                {item.title}
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Article;
