import { motion } from 'framer-motion';
import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

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
			<Link href="/" passHref>
				<p className={styles.brand}>Cheza.</p>
			</Link>

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
						<Link href={link.link} passHref>
							<motion.a className={styles.link}>
								{link.name}
							</motion.a>
						</Link>
					</motion.li>
				))}
			</ul>
		</div>
	);
}

export default Header;
