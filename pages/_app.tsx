import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/minor_components/header/Header.module';
import Footer from '../components/minor_components/footer/Footer.module';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
	const docRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const [isLoading, setIsLoading] = useState(true);

	const scroll = () => docRef.current.scrollTo(0, 0);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return isLoading ? (
		<div className="w-screen h-screen bg-[#0D2A51] bg-opacity-2 flex items-center justify-center">
			<Head>
				<title>Cheza</title>
			</Head>
			<div className="animate-bounce">
				<Image src="/icon.png" height={200} width={200} alt="Cheza" />
			</div>
		</div>
	) : (
		<motion.div
			ref={docRef}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 30,
			}}
			animate={{
				scrollBehavior: 'smooth',
			}}
			className="wrapper"
		>
			<Header />
			<Component {...pageProps} />
			<Footer />

			<div
				onClick={() => scroll()}
				className="absolute text-black bottom-10 right-10 h-16 w-16  bg-primary shadow-2xl rounded-full flex items-center justify-center cursor-pointer"
			>
				<Image
					src="/icons/up-arrow.png"
					height={36}
					width={36}
					alt="Cheza"
				/>
			</div>
		</motion.div>
	);
}

export default MyApp;
