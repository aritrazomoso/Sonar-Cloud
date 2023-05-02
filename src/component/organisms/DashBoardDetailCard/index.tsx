import React from 'react';
import {Card, CardContent, Stack} from '@mui/material';
import LogoWithBackground from '../../molecules/LogoWithBackground';
import TypographyComponent from '../../atoms/Typrography';
import IconComponent from '../../atoms/Icon';

const DashBoardDetailCard = () => {
	return (
		<Card
			sx={{
				backgroundColor: '#201F24',
				padding: '32px',
				width: '100%',
				height: '259px',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '12px',
			}}
		>
			<CardContent>
				<Stack direction='row' justifyContent='space-around'>
					<Stack>
						<LogoWithBackground name='calender' />
						<Stack direction='row' alignItems='center' gap={2} paddingY={2}>
							<TypographyComponent color='#C9C8CC' varient='body1'>
								Term cap
							</TypographyComponent>
							<IconComponent name='info' />
						</Stack>
						<TypographyComponent varient='heading1' color='#E8E7F0'>
							12 months
						</TypographyComponent>
					</Stack>
					<Stack>
						<LogoWithBackground name='documentDownload' />
						<Stack direction='row' alignItems='center' gap={2} paddingY={2}>
							<TypographyComponent
								color='#C9C8CC'
								varient='body1'
								fontWeight='light'
							>
								Available credit
							</TypographyComponent>
							<IconComponent name='info' />
						</Stack>
						<TypographyComponent varient='heading1' color='#E8E7F0'>
							$880.0k
						</TypographyComponent>
					</Stack>
					<Stack>
						<LogoWithBackground name='percentageSquare' />
						<Stack direction='row' alignItems='center' gap={2} paddingY={2}>
							<TypographyComponent
								color='#C9C8CC'
								varient='body1'
								fontWeight='light'
							>
								Max interest rate
							</TypographyComponent>
							<IconComponent name='info' />
						</Stack>
						<TypographyComponent varient='heading1' color='#E8E7F0'>
							12.00%
						</TypographyComponent>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default DashBoardDetailCard;
