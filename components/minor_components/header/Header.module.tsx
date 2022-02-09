import React from 'react';
import styles from './Header.module.css';

interface Props {}

function Header(props: Props) {
	const {} = props;

	return (
		<div className={styles.container}>
			<p className={styles.banner}>Cheza.</p>
			<ul className={styles.nav}>
				<li className={styles.navItem}>
					<a href="#">Home</a>
				</li>
				<li className={styles.navItem}>
					<a href="#">Projects</a>
				</li>
				<li className={styles.navItem}>
					<a href="#">Blog</a>
				</li>
				<li className={styles.navItem}>
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
