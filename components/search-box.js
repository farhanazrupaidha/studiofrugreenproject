// components/search-box.js
import { connectSearchBox } from "react-instantsearch-dom"

import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { FormControl, InputLabel, Input, TextField, FormHelperText } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';

function SearchBox({ refine }) {
    return (
     <Box sx={{width:'100%', maxWidth:700}}>
              <Typography variant="h3" color="inherit" gutterBottom>
                     + Find specific post here +
                   </Typography>
        <TextField
            variant="standard"
            style = {{width: '100%'}}
            sx={{ mb:3 }}
            color="secondary"
            placeholder= "Type here"
            className="search-box"
            type="search"
            placeholder="Search..."
            onChange={(e) => refine(e.currentTarget.value)}
        />
     </Box>
    )
}
export default connectSearchBox(SearchBox)