import {Box} from '@mui/material';
import React from 'react';
import IconComponent from '../../atoms/Icon';

interface PropsType {
	name: 'calender' | 'documentDownload' | 'percentageSquare';
}

const LogoWithBackground = ({name}: PropsType) => {
	return (
		<Box
			sx={{
				backgroundColor: '#28272B',
				width: '80px',
				height: '80px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '12px',
			}}
		>
			<IconComponent name={name} />
		</Box>
	);
};

export default LogoWithBackground;
