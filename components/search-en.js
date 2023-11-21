import React, { useState } from 'react';
import { useRouter } from "next/router";

import { useLazyQuery, gql } from '@apollo/client';
import withApollo from "../config";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.default',
    overflowY:'auto',
    height:'100%',
    maxHeight: 500,
    display:'block',
    width: '100%',
    maxWidth:580,
    p:5,
    boxShadow: 100,
    borderRadius: 5
};

const TITLE_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    posts(where: {_search: $filter}, locales: en ) {
        title
        slug
    }
  }
`;

const Search = ({posts, slug}) => {
  const [state, setstate] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data, loading, error }] = useLazyQuery(
  TITLE_SEARCH_QUERY
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

return (
<Box>
    <Button aria-label="delete" onClick={handleOpen} color="secondary">
        <SearchIcon /> <Typography variant='subtitle' sx={{ml:1}}>Search</Typography>
    </Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflow:'scroll'}}
    >
    <Box sx={style}>
    <Box sx={{maxWidth:500, m:'auto', mt:5, mb:10, textAlign: 'center', backgroundColor: '#eceff1', borderRadius: 5}}>
      <Stack spacing={3} direction="row">
        <TextField
          required
          variant="standard"
          style = {{width: '100%'}}
          sx={{ input: { color: 'black' }, mb:1, mt:2, ml:3 }}
          color="secondary"
          placeholder="Type your search here"
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{borderRadius: 5}}
          onClick={() =>
            executeSearch({
              variables: { filter: searchFilter },
            })
          }
        >
         Search
         </Button>
      </Stack>
    </Box>
    {data &&
      data.posts.map((item) => (
        <Box sx={{maxWidth:1000, m:'auto', p:2, backgroundColor: '#eceff1'}} key={item.id}>
        <Link href={`/en/posts/${item.slug}`} className="hover:underline">
            <Typography color='black' sx={{m:1}}>{item.title}</Typography>
        </Link>
        </Box>
    ))}
    <Button
      variant="contained"
      color="secondary"
      sx={{borderRadius: 5, mt: 3}}
      onClick={handleClose}
    >
      Close
    </Button>
    </Box>
    </Modal>

</Box>
)
}

export default withApollo(Search);