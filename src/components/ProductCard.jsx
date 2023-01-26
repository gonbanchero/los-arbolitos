import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const ProductCard = ({ props }) => {
	console.log(props);
	return (
		<Box
			style={{
				border: '1px solid',
				padding: '20px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginBottom: '20px',
				marginTop: '20px',
			}}
		>
			<Img src={props.img} alt={props.name} />
			<Box
				sx={{
					width: '70%',
					py: '10px',
					px: '20px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: '6px',
				}}
			>
				<Title>{props.name}</Title>
				<Description>{props.description}</Description>
				<Box>${props.price}</Box>
			</Box>
			<Box
				style={{
					width: '15%',
					display: 'flex',
					justifyContent: 'right',
					alignItems: 'center',
				}}
			>
				<IconButton color="primary" aria-label="add to shopping cart">
					<AddCircleOutlineIcon />
				</IconButton>
				<Quantity>1</Quantity>

				<IconButton color="primary" aria-label="add to shopping cart">
					<RemoveCircleOutlineIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

const Img = styled.img`
	width: 15%;
	border-radius: 10px;
`;

const Title = styled.h3``;
const Description = styled.p`
	font-size: 13px;
`;

const Quantity = styled.p``;
