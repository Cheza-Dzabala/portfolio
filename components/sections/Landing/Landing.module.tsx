import React, { useState } from 'react';
import ContactLinks from '../../minor_components/contact-links/ContactLinks.module';
import Quote from './Quote';
import styles from './Landing.module.css';
import Invocation from './Invocation';
import { workHistory } from './data/work_history';
import Selected from './selected';
import Unselected from './unselected';
import { programmingLanguages } from './data/languages';
import { Image } from '../../../loaders/image.loader';
import { motion } from 'framer-motion';

interface Props {}

function Landing(props: Props) {
	const [selected, setSelected] = useState(1);
	const {} = props;

	return (
		<div className={`section bg-primary`}>
			<ContactLinks />
			<main className={`sectionContent ${styles.landingContainer}`}>
				<Quote />
				<Invocation />
				<div className="flex flex-row justify-between ">
					<article className="w-2/3 flex flex-col">
						<p className="text-lg font-light mb-10">About Me.</p>
						<div className="flex w-full mb-2">
							<div className="w-48 pl-2 pt-2 rounded-xl  border-l-4 border-t-4">
								<div
									className="w-44 h-44 rounded-xl"
									style={{
										backgroundImage: `url('/images/me.jpeg')`,
										backgroundSize: 'cover',
									}}
								/>
							</div>
							<div className="flex-1 px-5 w-1/2 font-light text-sm">
								<p>
									{`Hey there, I'm Macheza Dzabala. I'm a
									software engineer currently based in Kigali,
									RW. I'm a trained software developer, and I'm
									passionate about building things that people
									love.`}
								</p>
								<br />
							</div>
						</div>
						<p className="text-xs my-3">
							Some of my favorite languages & Frameworks are:
						</p>
						<div className="flex flex-row items-center flex-wrap justify-between   w-full py-2 pr-5">
							{programmingLanguages.map((language, index) => {
								return (
									<motion.div
										initial="hidden"
										whileInView="visible"
										transition={{
											duration: index * 0.5,
										}}
										viewport={{ once: true }}
										variants={{
											visible: { opacity: 1, y: 0 },
											hidden: {
												opacity: 0,
												y: -5,
											},
										}}
										className="space-y-2 flex-col flex items-center cursor-pointer"
										key={index}
									>
										<Image
											src={language.icon}
											height={32}
											width={32}
											alt={language.name}
										/>
										<span className="text-xs ">
											{language.name}
										</span>
									</motion.div>
								);
							})}
						</div>
					</article>
					<div className={`${styles.workHistory}`}>
						<p className="text-lg font-light mb-10">Work History</p>
						<ul className="space-y-5">
							{workHistory.map((work, index) => {
								const isSelected = selected === work.order;
								if (isSelected) {
									return (
										<Selected
											key={index}
											work={work}
											isSelected={isSelected}
										/>
									);
								} else {
									return (
										<Unselected
											key={index}
											work={work}
											isSelected={isSelected}
											setSelected={setSelected}
										/>
									);
								}
							})}
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Landing;
