import React from 'react';
import ContactLinksInverted from '../../minor_components/contact-links/ContactLinksInverted.module';
import styles from './Contact.module.css';

interface Props {}

function Contact(props: Props) {
	const {} = props;

	return (
		<div className={`section bg-white`}>
			<ContactLinksInverted />
			<div className="sectionContent">
				<h1 className="text-primary">Contact Me</h1>
			</div>
		</div>
	);
}

export default Contact;
