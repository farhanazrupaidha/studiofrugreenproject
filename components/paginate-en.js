import React from 'react';
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
			<ButtonGroup  variant="contained" sx={{borderRadius: 5, mb:10}} color="secondary" backgroundColor="white" aria-label="medium secondary button group">
				<Button onClick={previousPage} className="page-number">
					Newer <KeyboardArrowLeftIcon />
				</Button>
				<Button onClick={nextPage} className="page-number">
					Older <KeyboardArrowRightIcon />
				</Button>
			</ButtonGroup>
    </>
	);
};

export default Paginate;

