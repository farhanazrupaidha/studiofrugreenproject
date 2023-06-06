// components/search.js
import * as React from 'react';
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./search-box";
import SearchHits from "./search-hits";
import AdsenseText from "./adsense-text";

import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY:'scroll',
    height:'100%',
    maxHeight: 350,
    display:'block',
    bgcolor: 'background.paper',
    width: '100%',
    maxWidth:650,
    p:5,
    boxShadow: 24,
};

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
);

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
<>
    <IconButton aria-label="delete" onClick={handleOpen} color="secondary">
        <SearchIcon />
    </IconButton>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflow:'scroll'}}
    >
        <div className={"algolia-search"}>
            <InstantSearch searchClient={searchClient} indexName="my_blog_content">
                <Box sx={style}>
                    <AdsenseText />
                    <SearchBox />
                    <SearchHits />
                </Box>
            </InstantSearch>
        </div>
      </Modal>
</>
    );
}