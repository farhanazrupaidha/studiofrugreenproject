import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
			<ul className="pagination">
				<li onClick={previousPage} className="page-number">
					Prev
				</li>
				{pageNumbers.map((number) => (
					<li
						key={number}
						onClick={() => paginate(number)}
						className={
							'page-number ' + (number === currentPage ? 'active' : '')
						}
					>
						{number}
					</li>
				))}
				<li onClick={nextPage} className="page-number">
					Next
				</li>
			</ul>
	    <Stack spacing={2}>
	    {pageNumbers.map((number) => (
          <Pagination
            count={5}
            key={number}
            onClick={() => paginate(number)}
            className={
            'page-number ' + (number === currentPage ? 'active' : '')
            }
          />
        ))}
        </Stack>
    </>
	);
};

export default Paginate;

