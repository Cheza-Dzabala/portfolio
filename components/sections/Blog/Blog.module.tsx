import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import ContactLinks from '../../minor_components/contact-links/ContactLinks.module';
import styles from './Blog.module.css';
import { blogs, tags } from './data/blogs';
interface Props {}

function Blog(props: Props) {
	const {} = props;

	return (
		<div className={`section bg-primary`}>
			<ContactLinks />
			<div className={`sectionContent ${styles.blogContainer} `}>
				<h1 className="text-white">Blog</h1>
				<div className="w-full flex flex-row justify-between">
					<div className="w-1/2 space-y-10 flex flex-col">
						<p className="uppercase text-sm tracking-widest">
							recently published
						</p>
						<div className="w-full flex flex-col space-y-10">
							{blogs.map((blog, index) => {
								return (
									<div
										className={styles.blogTile}
										key={index}
									>
										<h1>{blog.title}</h1>
										<p>{blog.summary}</p>
										<Link
											href={`blog/${blog.slug}`}
											passHref
										>
											<a>Read More</a>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
					<div className="w-1/2 flex-col">
						<div className="flex  space-x-5 uppercase text-lg tracking-widest justify-end px-10">
							<p className="flex line-through text-[#9A9A9A]">
								Search
							</p>
							<p>Filter</p>
						</div>
						<div className="flex flex-row flex-wrap space-x-2 text-primary text-xs p-10 justify-center">
							{tags.map((tag, index) => (
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: index * 0.1 }}
									variants={{
										visible: { opacity: 1, y: 0 },
										hidden: {
											opacity: 0,
											y: -100,
										},
									}}
									className={styles.tag}
									key={index}
								>
									{tag.name}
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
