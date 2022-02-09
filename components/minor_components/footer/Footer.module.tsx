import React from 'react';
import styles from './Footer.module.css';

interface Props {}

function Footer(props: Props) {
	const {} = props;

	return (
		<div className={styles.container}>
			<p className="text-xs">Designed & Built By</p>
			<p className="text-xl font-semibold">Cheza O. Dzabala</p>
		</div>
	);
}

export default Footer;
