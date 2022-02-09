import React from 'react';
import ContactLinks from '../../minor_components/contact-links/ContactLinks.module';

interface Props {}

function Landing(props: Props) {
	const {} = props;

	return (
		<div className={`section bg-primary`}>
			<ContactLinks />
			<div className="sectionContent"></div>
		</div>
	);
}

export default Landing;
