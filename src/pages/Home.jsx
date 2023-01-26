import React from 'react';
import { Box } from '@mui/material';
import { ProductList } from '../components/ProductList';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
	return (
		<Box
			sx={{
				maxWidth: '700px',
				margin: '0 auto',
				padding: '5px',
			}}
		>
			<ProductList />
		</Box>
	);
};
