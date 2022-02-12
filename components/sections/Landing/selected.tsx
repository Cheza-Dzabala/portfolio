import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { workHistory } from './data/work_history';
import styles from './Landing.module.css';

interface Props {
	isSelected: boolean;
	work: workHistory;
}

function Selected(props: Props) {
	const { work, isSelected } = props;
	return (
		<AnimatePresence>
			<motion.li
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: 'spring',
				}}
				exit={{ opacity: 0 }}
				className="
                    flex text-xs space-x-4 p-4 rounded-md cursor-pointer font-semibold
                    text-primary bg-white "
				key={work.order}
			>
				<h6>{work.order}.</h6>
				<div className="flex flex-col space-y-2">
					<p className={`text-[#358CFF]`}>{work.company}</p>
					{isSelected && (
						<p className="font-light ">{work.jobDescription}</p>
					)}
				</div>
			</motion.li>
		</AnimatePresence>
	);
}

export default Selected;
