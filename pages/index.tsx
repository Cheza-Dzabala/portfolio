import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ContactLinks from '../components/contact-links/ContactLinks.module';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={`section bg-primary`}>
			<Head>
				<title>Cheza</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ContactLinks />
			<div className="sectionContent"></div>
		</div>
	);
};

export default Home;
