// components/search-box.js
import { connectSearchBox } from "react-instantsearch-dom"

import Box from '@mui/material/Box';
import { FormControl, InputLabel, Input, TextField, FormHelperText } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';

function SearchBox({ refine }) {
    return (
     <Box sx={{width:'100%', maxWidth:700}}>
        <TextField
            variant="filled"
            style = {{width: '100%'}}
            sx={{ input: { color: 'red' }, mb:3 }}
            color="secondary"
            placeholder= "Cari ... "
            className="search-box"
            type="search"
            onChange={(e) => refine(e.currentTarget.value)}
        />
     </Box>
    )
}
export default connectSearchBox(SearchBox)