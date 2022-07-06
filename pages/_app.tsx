import '../styles/globals.css';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	const theme = useMantineTheme();
	return (
		<MantineProvider theme={theme}>
			<Component {...pageProps} />
		</MantineProvider>
	);
}

export default MyApp;
