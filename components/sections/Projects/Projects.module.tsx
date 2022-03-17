import React from 'react';
import ContactLinksInverted from '../../minor_components/contact-links/ContactLinksInverted.module';
import styles from './Projects.module.css';
import { projects } from './data/projects';
import { motion } from 'framer-motion';

interface Props {}

function Projects(props: Props) {
	const {} = props;

	return (
		<div className={`section bg-white`}>
			<ContactLinksInverted />
			<div className={`sectionContent ${styles.projectsContainer}`}>
				<h1 className="text-primary">Key Projects</h1>
				<p className="text-[#A6A6A6] font-medium text-xs">
					Here are some of the projects I really enjoyed doing.
				</p>
				<div className={styles.projects}>
					{projects.map((project) => (
						<div className={styles.projectItem} key={project.order}>
							<div className="h-full flex items-center  ">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 1 }}
									variants={{
										visible: { opacity: 1, y: 0 },
										hidden: {
											opacity: 0,
											y: -100,
										},
									}}
									className={styles.image}
									style={{
										backgroundImage: `url(${project.image})`,
										backgroundSize: 'cover',
									}}
								/>
							</div>
							<div className="flex flex-col space-y-5">
								<p className={styles.projectTitle}>
									{project.title}
								</p>
								<p className={styles.projectDescription}>
									{project.description}
								</p>
								<div className={styles.technologies}>
									{project.technologies.map((tech, index) => (
										<div
											className={styles.techItem}
											key={index}
										>
											{tech}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-black">
					<p className="text-black">Project Directory</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
