import React from 'react';
import {
	Box,
	Card,
	CardContent,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import TypographyComponent from '../../atoms/Typrography';
import IconComponent from '../../atoms/Icon';
import TextButton from '../../atoms/TextButon';
import theme from '../../../themes';

const AllPaymentCard = () => {
	return (
		<Card
			sx={{
				backgroundColor: theme.palette.elevation1.main,
				padding: '32px',
				borderRadius: '12px',
				width: '100%',
			}}
		>
			<CardContent>
				<Stack gap={2}>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='space-between'
					>
						<Stack direction='row' alignItems='center' gap={2}>
							<TypographyComponent varient='heading1' color='#E8E7F0'>
								Cash accleration
							</TypographyComponent>
							<IconComponent name='info' />
						</Stack>
						<Stack direction='row' alignItems='center' gap={2}>
							<IconComponent name='sync' />
							<TypographyComponent color='#C9C8CC' varient='button'>
								Sync Now
							</TypographyComponent>
						</Stack>
					</Stack>
					<Stack direction='row' gap={2}>
						<TextButton
							variant='outlined'
							style={{
								backgroundColor: '#393552',
								borderColor: '#B4A9FF',
								color: '#B4A9FF',
							}}
							label='My contracts'
						/>
						<TextButton
							variant='outlined'
							style={{
								backgroundColor: '',
								borderColor: '#413F4D',
								color: '#C9C8CC',
							}}
							label='My contracts'
						/>
					</Stack>
					<Stack>
						<TableContainer
							style={{
								width: '100%',
							}}
						>
							<Table aria-label='table' size='medium' style={{}}>
								<TableHead>
									<TableHead
										sx={{
											backgroundColor: '#262529',
											borderRadius: '20px',
										}}
									>
										<TableRow>
											{[
												{title: 'Name', key: 'title'},
												{title: 'Status', key: 'status'},
												{title: 'Type', key: 'type'},
												{title: 'PerPayment', key: 'perPayment'},
												{title: 'Total Financed', key: 'totalFinanced'},
												{title: 'Total Available', key: 'totalAvailable'},
											].map(({title, key}) => (
												<TableCell
													key={key}
													sx={{
														color: '#A5A5A6',
														border: 'none',
														width: 210,
													}}
												>
													{title}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{data.map((row, index) => (
											<TableRow key={index}>
												<TableCell
													sx={{
														color: '#E8E7F0',
														border: 'none',
														width: 210,
													}}
												>
													{row.name}
												</TableCell>
												<TableCell
													sx={{
														color: '#E8E7F0',
														border: 'none',
														width: 210,
													}}
												>
													<Box
														sx={{
															backgroundColor: '#2D2D30',
															textAlign: 'center',
															width: '90px',
														}}
													>
														<TypographyComponent>
															{row.status}
														</TypographyComponent>
													</Box>
												</TableCell>
												<TableCell
													sx={{
														color: '#E8E7F0',
														border: 'none',
													}}
												>
													{row.type}
												</TableCell>
												<TableCell
													sx={{
														color: '#E8E7F0',
														border: 'none',
													}}
												>
													{row.perPayment}
												</TableCell>
												<TableCell
													sx={{
														color: '#E8E7F0',
														border: 'none',
													}}
												>
													{row.totalFinance}
												</TableCell>
												<TableCell
													sx={{
														color: '#E8E7F0',
														border: 'none',
													}}
												>
													{row.totalAvailable}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</TableHead>
							</Table>
						</TableContainer>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

const data = [
	{
		name: 'Contract 1',
		status: 'Available',
		type: 'Mounthly',
		perPayment: '$12,000.25',
		totalFinance: '-',
		totalAvailable: '$126,722.64',
	},
	{
		name: 'contract 2',
		status: 'available',
		type: 'mounthly',
		perpayment: '$6,000.25',
		totalfinance: '-',
		totalavailable: '$630,736 0.64',
	},
	{
		name: 'Contract 3',
		status: 'Available',
		type: 'Mounthly',
		perPayment: '$12,000.25',
		totalFinance: '-',
		totalAvailable: '$126,722.64',
	},
	{
		name: 'Contract 4',
		status: 'Available',
		type: 'Mounthly',
		perPayment: '$12,000.25',
		totalFinance: '-',
		totalAvailable: '$126,722.64',
	},
];

export default AllPaymentCard;
