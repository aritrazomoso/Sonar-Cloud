import React from 'react';
import {Box, Stack} from '@mui/material';
import TypographyComponent from '../../atoms/Typrography';
import IconComponent from '../../atoms/Icon';
import theme from '../../../themes';

interface PropsType {
	content: string;
	name: 'home' | 'coin' | 'flash';
	active?: boolean;
	marginBottom?: string;
}

const LeftNavElement = ({content, name, active, marginBottom}: PropsType) => {
	return (
		<Box
			sx={{
				backgroundColor: active
					? theme.palette.elevation2.main
					: theme.palette.elevation1.main,
				padding: '16px',
				borderRadius: '12px',
				marginBottom,
			}}
		>
			<Stack direction='row' gap={2} alignItems='center'>
				<IconComponent
					name={name}
					color={
						active
							? theme.palette.gammaTextHigh.main
							: theme.palette.gammaTextLow.main
					}
					width='40px'
					height='40px'
				/>
				<TypographyComponent
					varient='body2'
					color={
						active
							? theme.palette.gammaTextHigh.main
							: theme.palette.gammaTextLow.main
					}
				>
					{content}
				</TypographyComponent>
			</Stack>
		</Box>
	);
};
LeftNavElement.defaultProps = {
	active: false,
	marginBottom: '0',
};

export default LeftNavElement;
