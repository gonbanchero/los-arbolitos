import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../assets/losarbolitos.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const TopBar = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<AppBar position="static">
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						py: '10px',
						backgroundColor: '#252523',
					}}
				>
					<img src={logo} style={{ width: '100px' }} />
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
