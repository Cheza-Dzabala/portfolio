import React from 'react';
import ContactLinks from '../../minor_components/contact-links/ContactLinks.module';

interface Props {}

function Blog(props: Props) {
	const {} = props;

	return (
		<div className={`section bg-primary`}>
			<ContactLinks />
			<div className="sectionContent">
				<h1 className="text-white">Blog</h1>
			</div>
		</div>
	);
}

export default Blog;
