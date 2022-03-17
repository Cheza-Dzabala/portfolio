import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import { motion } from 'framer-motion';
import router from 'next/router';

interface Props {}

function BlogPage(props: Props) {
	const {} = props;
	const { slug } = router.query;
	console.log({ slug });
	const docRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const scroll = () => docRef.current.scrollTo(0, 0);
	useEffect(() => {
		scroll();
	}, []);

	return (
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
			className={styles.container}
		>
			<div className={styles.summary}>
				<div className={styles.summaryContainer}>
					<div
						className={styles.summaryImage}
						style={{
							backgroundSize: 'cover',
							backgroundImage: `url(${'/images/blog-image.png'})`,
						}}
					/>
					<div className={styles.summaryImageOverlay}>
						<div className={styles.summaryImageOverlayText}>
							<p className={styles.summaryImageOverlayTextTitle}>
								Mapping out your engineering career
							</p>
							<p className={styles.summaryImageOverlayTextDate}>
								Jan 1st 2022
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default BlogPage;
