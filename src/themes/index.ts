import {
	Palette,
	createTheme,
	PaletteOptions,
	PaletteColor,
	TypographyVariants,
	SxProps,
	TypographyVariantsOptions,
} from '@mui/material/styles';

import {purple} from '@mui/material/colors';
import {Button, Typography} from '@mui/material';

export const defaultTheme = createTheme();

declare module '@mui/material/styles' {
	interface PaletteOptions {
		purple?: PaletteOptions['primary'];
		white: PaletteOptions['primary'];
		gammaTextHigh: PaletteOptions['primary'];
		gammaTextMid: PaletteOptions['primary'];
		gammaTextLow: PaletteOptions['primary'];
		elevation0: PaletteOptions['primary'];
		elevation1: PaletteOptions['primary'];
		elevation2: PaletteOptions['primary'];
		gammaBorderHigh: PaletteOptions['primary'];
		gammaBorderLow: PaletteOptions['primary'];
		gammaIconLow: PaletteOptions['primary'];
		gammaIconHigh: PaletteOptions['primary'];
	}
	interface Palette {
		purple: PaletteColor;
		white: PaletteColor;
		gammaIconHigh: PaletteColor;
		gammaIconLow: PaletteColor;
		gammaTextLow: PaletteColor;
		gammaTextMid: PaletteColor;
		gammaTextHigh: PaletteColor;
		gammaBorderLow: PaletteColor;
		gammaBorderHigh: PaletteColor;
		elevation0: PaletteColor;
		elevation1: PaletteColor;
		elevation2: PaletteColor;
	}

	interface TypographyVariants {
		title: SxProps;
		haeding1: SxProps;
	}
	interface TypographyVariantsOptions {
		title: SxProps;
		heading1: SxProps;
		heading2: SxProps;
		body1: SxProps;
		body2: SxProps;
		caption: SxProps;
		button: SxProps;
	}
}
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		title: true;
		heading1: true;
		heading2: true;
		body1: true;
		body2: true;
		caption: true;
		button: true;
	}
}

const theme = createTheme({
	palette: {
		purple: {
			'400': '#B4A9FF',
			'500': '#6C5DD3',
			'600': '#393552',
		},
		white: {
			'500': '#E8E8E9',
		},
		gammaTextHigh: {
			main: '#E8E7F0',
		},
		gammaTextMid: {
			main: '#C9C8CC',
		},
		gammaTextLow: {
			main: '#A5A5A6',
		},
		elevation0: {
			main: '#19181C',
		},
		elevation1: {
			main: '#201F24',
		},
		elevation2: {
			main: '#2D2D30',
		},
		gammaBorderLow: {
			main: '#28272B',
		},
		gammaBorderHigh: {
			main: '#413F4D',
		},
		gammaIconLow: {
			main: '#727080',
		},
		gammaIconHigh: {
			main: '#D4D2DE',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					'&.Mui-disabled': {
						background: purple[500],
						color: '#E8E8E9',
					},
					borderRadius: '12px',
				},
			},
		},
	},
	typography: {
		title: {
			fontSize: '36px',
			fontWeight: 'bold',
			fontStyle: 'normal',
		},
		heading1: {
			fontSize: '24px',
			fontWeight: 'bold',
			fontStyle: 'normal',
		},
		heading2: {
			fontSize: '18px',
			fontWeight: '500',
			fontStyle: 'normal',
		},
		body1: {
			fontSize: '16px',
			fontWeight: '500',
			fontStyle: 'normal',
		},
		body2: {
			fontSize: '14px',
			fontWeight: '600',
			fontStyle: 'normal',
		},
		caption: {
			fontSize: '12px',
			fontWeight: '500',
			fontStyle: 'normal',
		},
		button: {
			fontSize: '16px',
			fontWeight: '600',
			fontStyle: 'normal',
		},
	},
});

export default theme;
