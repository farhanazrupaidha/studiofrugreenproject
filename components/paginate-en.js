import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Paginate = ({
	postsPerPage,
	totalPosts,
	currentPage,
	paginate,
	previousPage,
	nextPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

return (
	<Box>
		<Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" alignItems="center">
				<Button onClick={previousPage} className="page-number" variant="outlined" sx={{borderRadius: 5, mb:10}} color="secondary">
					<KeyboardArrowLeftIcon /> Newer
				</Button>
				<Button onClick={nextPage} className="page-number" variant="outlined" sx={{borderRadius: 5, mb:10}} color="secondary">
					Older <KeyboardArrowRightIcon />
				</Button>
		</Stack>		
    </Box>
	);
};

export default Paginate;


