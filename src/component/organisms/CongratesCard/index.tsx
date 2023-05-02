import React from 'react';
import {Card, CardContent} from '@mui/material';
import backgroundImage from '../../../assets/Images/CardImages/CongratesCard.svg';
import TypographyComponent from '../../atoms/Typrography';
import TextButton from '../../atoms/TextButon';

const CongratesCard = () => {
	return (
		<Card
			sx={{
				background: `url(${backgroundImage})`,
				width: '700px',
				height: '259px',
			}}
		>
			<CardContent
				sx={{
					padding: '2rem',
				}}
			>
				<TypographyComponent varient="heading1" color='#FFFFFF'>
					Congratulations you
				</TypographyComponent>
				<TypographyComponent varient="heading1" color='#FFFFFF'>
					are ready to start!
				</TypographyComponent>
				<TypographyComponent varient='title' color='#E8E7F0' fontWeight='light'>
					You are approved for funding. We are
				</TypographyComponent>
				<TypographyComponent varient='title' color='#E8E7F0' fontWeight='light'>
					ready to advance you upto $8.3M
				</TypographyComponent>
				<TextButton
					style={{
						borderColor: '#E8E8E9',
						color: '#E8E8E9',
						marginTop: '1rem',
					}}
					label='Learn More'
					size='large'
					variant='outlined'
				/>
			</CardContent>
		</Card>
	);
};

export default CongratesCard;
