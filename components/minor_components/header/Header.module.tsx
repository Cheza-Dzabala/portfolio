import { motion } from 'framer-motion';
import React from 'react';
import styles from './Header.module.css';

interface Props {}

interface NavigationLink {
	name: string;
	link: string;
}

function Header(props: Props) {
	const links: NavigationLink[] = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Projects',
			link: '/projects',
		},
		{
			name: 'Blog',
			link: '/blog',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	];
	const {} = props;

	return (
		<div className={styles.container}>
			<p className={styles.banner}>Cheza.</p>
			<ul className={styles.nav}>
				{links.map((link, index) => (
					<motion.li
						key={index}
						initial="hidden"
						whileInView="visible"
						transition={{ duration: index }}
						viewport={{ once: true }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: {
								opacity: 0,
								y: -5,
							},
						}}
						className={styles.navItem}
					>
						<motion.a>{link.name}</motion.a>
					</motion.li>
				))}
			</ul>
		</div>
	);
}

export default Header;
