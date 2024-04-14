import React, { useState } from 'react';

import { useLazyQuery, gql } from '@apollo/client';
import withApollo from "../config";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const style = {
    overflowY:'auto',
    height:'100%',
    maxHeight: 500,
    display:'block',
    p:2
};

const TITLE_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    posts(where: {_search: $filter}) {
        title
        slug
    }
  }
`;

const SearchBar = ({posts, slug}) => {
  const [state, setstate] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(
  TITLE_SEARCH_QUERY
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refresh = () => window.location.reload(true)

return (
<Box sx={style}>
    <Box sx={{maxWidth:700, m:'auto', mb:10, textAlign: 'center', backgroundColor: '#eceff1', borderRadius: 5}}>
      <Stack spacing={1} direction="row">
        <TextField
          required
          variant="standard"
          error
          style = {{width: '100%'}}
          sx={{ input: { color: 'black' }, mb:1, mt:2, ml:3 }}
          placeholder="Jika hasil kosong berarti data tidak ditemukan"
          type="text"
          label="Ketik pencarian di sini"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <Button
          variant="outlined"
          color="secondary"
          href="#button"
          sx={{borderRadius: 5}}
          onClick={() =>
            executeSearch({
              variables: { filter: searchFilter },
            })
          }
        >
            Cari
         </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="#button"
          sx={{borderRadius: 5}}
          onClick={refresh}
        >
         Reset
         </Button>
      </Stack>
    </Box>
    {data &&
      data.posts.map((item) => (
        <Box sx={{maxWidth:1000, m:'auto', p:2, backgroundColor: '#eceff1'}} key={item.id}>
        <Link href={`/posts/${item.slug}`} className="hover:underline">
            <Typography color='black' sx={{m:1}}>{item.title}</Typography>
        </Link>
        </Box>
    ))}
</Box>
)
}

export default withApollo(SearchBar);