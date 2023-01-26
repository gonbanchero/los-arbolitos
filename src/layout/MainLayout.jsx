//MUI
import { Toolbar } from '@mui/material';
import { Box } from '@mui/material';

//OWN
import { TopBar } from './TopBar';

export const MainLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', m: 0 }}>
			<TopBar />

			<Box component="main" sx={{ flexGrow: 1, p: 1 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
