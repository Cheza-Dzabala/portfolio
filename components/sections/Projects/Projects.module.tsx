import React from 'react';
import ContactLinksInverted from '../../minor_components/contact-links/ContactLinksInverted.module';
import styles from './Projects.module.css';

interface Props {}

function Projects(props: Props) {
	const {} = props;

	return (
		<div className={`section bg-white`}>
			<ContactLinksInverted />
			<div className="sectionContent">
				<h1 className="text-primary">Projects</h1>
			</div>
		</div>
	);
}

export default Projects;
