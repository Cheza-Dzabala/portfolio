import React from 'react';
import styles from './Landing.module.css';

interface Props {}

function Invocation(props: Props) {
	const {} = props;

	return (
		<div className={styles.invocation}>
			<p className="w-1/2 font-light">
				I love to build things that make people question reality. It’s
				about the way products and my work affect the humans behind the
				apps and services.
			</p>
			{/* <button className="bg-white w-4/12 rounded-md h-16 hover:bg-gray-50">
				<a href="/projects">
					<span className="text-primary font-semibold">
						My Projects
					</span>
				</a>
			</button> */}
		</div>
	);
}

export default Invocation;
