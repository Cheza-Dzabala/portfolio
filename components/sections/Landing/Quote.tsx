import React from 'react';
import styles from './Landing.module.css';

interface Props {}

function Quote(props: Props) {
	const {} = props;

	return (
		<div className={styles.quote}>
			<h1>
				Any sufficiently advanced technology is indistinguishable from
				magic.
			</h1>
			<p>- Arthur C. Clarke</p>
		</div>
	);
}

export default Quote;
