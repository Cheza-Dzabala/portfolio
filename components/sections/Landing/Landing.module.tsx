import React, { useState } from 'react';
import ContactLinks from '../../minor_components/contact-links/ContactLinks.module';
import Quote from './Quote';
import styles from './Landing.module.css';
import Invocation from './Invocation';
import { workHistory } from './data/work_history';

interface Props {}

function Landing(props: Props) {
	const [selected, setSelected] = useState(1);
	const {} = props;

	return (
		<div className={`section bg-primary`}>
			<ContactLinks />
			<div className={`sectionContent ${styles.landingContainer}`}>
				<Quote />
				<Invocation />
				<div className={styles.workHistory}>
					<p className="text-lg font-light mb-10">Work History</p>
					<ul className="w-1/3 space-y-5">
						{workHistory.map((work, index) => {
							const isSelected = selected === work.order;
							return (
								<li
									onClick={() => setSelected(work.order)}
									className={`
									flex text-xs space-x-4 p-4 rounded-md cursor-pointer font-semibold
									${isSelected ? 'text-[#235598]' : 'text-white'} ${
										isSelected ? 'bg-white' : 'bg-primary'
									} }`}
									key={index}
								>
									<h6>{work.order}.</h6>
									<div className="flex flex-col space-y-2">
										<p
											className={`${
												isSelected
													? 'text-[#358CFF]'
													: 'text-white'
											} `}
										>
											{work.company}
										</p>
										{isSelected && (
											<p className="font-light">
												{work.jobDescription}
											</p>
										)}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Landing;
