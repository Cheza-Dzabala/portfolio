import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/minor_components/header/Header.module';
import Footer from '../components/minor_components/footer/Footer.module';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="wrapper">
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
