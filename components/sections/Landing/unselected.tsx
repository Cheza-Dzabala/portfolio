import React from 'react';
import { workHistory } from './data/work_history';

interface Props {
	isSelected: boolean;
	work: workHistory;
	setSelected: Function;
}

function Unselected(props: Props) {
	const { setSelected, work, isSelected } = props;

	return (
		<li
			onClick={() => setSelected(work.order)}
			className="
                    flex text-xs space-x-4 p-4 rounded-md cursor-pointer font-semibold
                    text-white bg-primary"
			key={work.order}
		>
			<h6>{work.order}.</h6>

			<div className="flex flex-col space-y-2">
				<p className={`text-white`}>{work.company}</p>
				{isSelected && (
					<p className="font-light">{work.jobDescription}</p>
				)}
			</div>
		</li>
	);
}

export default Unselected;
