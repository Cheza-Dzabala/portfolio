import React from 'react';
import styles from './ContactLinks.module.css';
import Image from 'next/image';
import { links } from './links.interface';

interface Props {}

function ContactLinks(props: Props) {
	const {} = props;

	return (
		<div className={styles.container}>
			<a className={styles.email} href="mailto:dzabalamacheza@gmail.com">
				dzabalamacheza@gmail.com
			</a>
			<span className={styles.separator} />
			<ul className={styles.links}>
				{links.map((link) => (
					<li key={link.name}>
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={link.icon}
								width={24}
								height={24}
								alt={link.name}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ContactLinks;