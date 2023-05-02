import React from 'react';
import {Stack} from '@mui/material';
import TypographyComponent from '../../atoms/Typrography';
import AvtarWithIcon from '../../molecules/AvtarWithIcon';

const DashBoardHeader = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			sx={{widows: '100%'}}
			alignItems='center'
		>
			<Stack>
				<TypographyComponent varient='title' color='#E8E7F0' fontWeight='bold'>
					Cash accleration
				</TypographyComponent>
				<TypographyComponent color='#A5A5A6'>
					Place to create new cash kicks to run your business
				</TypographyComponent>
			</Stack>
			<Stack>
				<AvtarWithIcon />
			</Stack>
		</Stack>
	);
};

export default DashBoardHeader;
