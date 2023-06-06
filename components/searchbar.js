import { useState } from 'react';
import {  useSiteSearch } from "react-datocms";
import { buildClient } from '@datocms/cma-client-browser';
import ReactPaginate from 'react-paginate';
import Marquee from "react-fast-marquee";

import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { FormControl, InputLabel, Input, TextField, FormHelperText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import SearchIcon from '@mui/icons-material/Search';

const client = buildClient({ apiToken: '48c7fe45764277df7437866b3c2b09' });

export default function SearchBar () {
  const [query, setQuery] = useState('');
  const { state, error, data } = useSiteSearch({
    client,
    initialState: { locale: 'en' },
    buildTriggerId: '7497',
    resultsPerPage: 10,
  });

return (
    <center>
        <Box sx={{m:5, mb:10}}>
            <Marquee
               speed='70'
               gradient={false}
            >
              <Typography variant="h3" color="inherit" gutterBottom>
                     + Find specific post here +
                   </Typography>
            </Marquee>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, maxWidth: '75ch', width:'100%' },
              }}
            >
              <FormControl>
                <TextField
                id="input-with-icon-textfield"
                label="Search"
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
               <SearchIcon />
               </InputAdornment>
               ),
                }}
                  variant="standard"
                  style = {{width: '100%'}}
                  sx={{ input: { color: 'red' }, mb:3 }}
                  color="secondary"
                  placeholder= "Type here"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Select
                  value={state.locale}
                  onChange={(e) => {
                    state.setLocale(e.target.value);
                  }}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="id">Bahasa Indonesia</MenuItem>
                </Select>
                 <Button
                   sx={{mt:2}}
                   variant="contained"
                   color="primary"
                   className="button primary block"
                   onClick ={(e) => {
                    e.preventDefault();
                    state.setQuery(query);
                    }}
                 >
                   Submit
                 </Button>
              </FormControl>
              {!data && !error && <p>Loading...</p>}
              {error && <p>Error! {error}</p>}
              {data && (
                <>
                <Box sx={{textAlign: 'left'}}>
                  {data.pageResults.map((result) => (
                    <div key={result.id}>
                      <Link><a href={result.url}>{result.title}</a></Link>
                      <Typography>{result.bodyExcerpt}</Typography>
                      <Link href={result.url}>{result.url}</Link>
                    </div>
                  ))}
                  </Box>
                  <Box sx={{textAlign: 'left'}}>
                  <Typography>Total results: {data.totalResults}</Typography>
                  </Box>
                  <Box sx={{textAlign: 'center'}}>
                  <Pagination count={data.totalPages} color="primary">
                  <ReactPaginate
                    pageCount={data.totalPages}
                    forcePage={state.page}
                    onPageChange={({ selected }) => {
                      state.setPage(selected);
                    }}
                    activeClassName="active"
                    renderOnZeroPageCount={() => null}
                  />
                  </Pagination>
                  </Box>
                </>
              )}
            </Box>
        </Box>
    </center>
)
}