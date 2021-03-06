import React from 'react';
import styles from './ContactLinksInverted.module.css';
import Image from 'next/image';
import { linksInverted } from './links.interface';
import { motion } from 'framer-motion';

interface Props {}

function ContactLinksInverted(props: Props) {
	const {} = props;

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 1 }}
			viewport={{ once: true }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: {
					opacity: 0,
					y: 0,
				},
			}}
		>
			<div className={styles.container}>
				<a
					className={styles.email}
					href="mailto:dzabalamacheza@gmail.com"
				>
					dzabalamacheza@gmail.com
				</a>
				<span className={styles.separator} />
				<ul className={styles.links}>
					{linksInverted.map((link) => (
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
		</motion.div>
	);
}

export default ContactLinksInverted;
