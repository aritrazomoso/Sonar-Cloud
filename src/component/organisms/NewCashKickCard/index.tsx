import React from 'react';
import { Card, CardContent} from '@mui/material';
import TextButton from '../../atoms/TextButon';
import TypographyComponent from '../../atoms/Typrography';

const NewCashKickCard = () => {
	return (
		<Card
			sx={{
				backgroundColor: '#201F24',
				padding: '32px',
				width: '100%',
				height: '257px',
				borderRadius: '12px',
			}}
		>
			<CardContent>
				<TypographyComponent varient='heading1' color='#E8E7F0'>
					Launch a new
				</TypographyComponent>
				<TypographyComponent
					varient='heading1'
					color='#E8E7F0'
					style={{
						marginBottom: '1rem',
					}}
				>
					Cash Kick
				</TypographyComponent>
				<TypographyComponent color='#A5A5A6'>
					<>
						You have upto
						<TypographyComponent
							color='#E8E7F0'
							varient='heading1'
							style={{
								display: 'inline',
							}}
						>
							<> $880,000.00 </>
						</TypographyComponent>
						available
					</>
				</TypographyComponent>
				<TypographyComponent color='#C9C8CC' varient='body1'>
					for a new cash advance
				</TypographyComponent>
				<TextButton
					label='New Cash Kick'
					variant='contained'
					size='large'
					style={{
						backgroundColor: '#6C5DD3',
						width: '100%',
						marginTop: '2rem',
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default NewCashKickCard;
