import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
<>
    <Stack spacing={2} sx={{borderRadius: 5, m:5}} justifyContent="center" alignItems="center">
			<ButtonGroup  variant="contained" sx={{borderRadius: 5}} color="secondary" backgroundColor="white" aria-label="medium secondary button group">
				<Button onClick={previousPage} className="page-number">
					Terbaru <KeyboardArrowLeftIcon />
				</Button>
				<Button onClick={nextPage} className="page-number">
					Terdahulu <KeyboardArrowRightIcon />
				</Button>
			</ButtonGroup>
	</Stack>
    </>
	);
};

export default Paginate;

