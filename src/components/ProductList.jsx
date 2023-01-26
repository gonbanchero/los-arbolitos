import React from 'react';
import { Box, Typography } from '@mui/material';
import products from '../products';
import { ProductCard } from './ProductCard';

const pizzas = products.filter((product) => product.category === 'pizzas');

console.log(pizzas);

export const ProductList = () => {
	return (
		<Box>
			<Typography variant="h6">Pizzas Napolitanas</Typography>
			{pizzas.map((item) => (
				<ProductCard props={item} />
			))}
		</Box>
	);
};
