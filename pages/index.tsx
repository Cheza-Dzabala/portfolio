import type { NextPage } from 'next';
import Head from 'next/head';
import Blog from '../components/sections/Blog/Blog.module';
import Contact from '../components/sections/Contact/Contact.module';
import Landing from '../components/sections/Landing/Landing.module';
import Projects from '../components/sections/Projects/Projects.module';

const Home: NextPage = () => {
	return (
		<div className="flex flex-col">
			<Head>
				<title>Cheza | Welcome</title>
			</Head>
			<Landing />
			<Projects />
			<Blog />
			<Contact />
		</div>
	);
};

export default Home;
