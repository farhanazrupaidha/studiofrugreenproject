import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
    <Stack spacing={2} sx={{m:5}} justifyContent="center" alignItems="center">
			<ButtonGroup  variant="text" color="secondary" aria-label="medium secondary button group">
				<Button onClick={previousPage} className="page-number">
					Sebelumnya
				</Button>
				{pageNumbers.map((number) => (
					<Button
						key={number}
						onClick={() => paginate(number)}
						className={
							'page-number ' + (number === currentPage ? 'active' : '')
						}
					>
						{number}
					</Button>
				))}
				<Button onClick={nextPage} className="page-number">
					Selanjutnya
				</Button>
			</ButtonGroup>
	</Stack>
    </>
	);
};

export default Paginate;

