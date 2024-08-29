import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/Experience';

const experiences = [
	{
		title: 'Software Engineer',
		company: 'Deephaven Data Labs',
		description: 'Stack: Python, Java, TypeScript, React.js, Docker',
		image: '../assets/coop/deephaven.png',
		dateRange: 'May 2024 - Aug 2024',
		location: 'New York, NY',
		link: 'https://deephaven.io/',
	},
	{
		title: 'Systems Software Developer',
		company: 'Ford Motor Company',
		description: 'Stack: TypeScript, Python, Next.js, React.js, SQL',
		image: '../assets/coop/ford.jpg',
		dateRange: 'Sept 2023 - Dec 2023',
		location: 'Oakville, ON',
		link: 'https://www.ford.com/',
	},
	{
		title: 'Software Developer',
		company: 'Deep Trekker',
		description: 'Stack: JavaScript, Node.js, React.js, Tailwind CSS',
		image: '../assets/coop/dt.jpeg',
		dateRange: 'Jan 2023 - Apr 2023',
		location: 'Kitchener, ON',
		link: 'https://www.deeptrekker.com/',
	},
];

const Experiences = () => (
	<div className='container mx-auto my-15'>
		<h1 className='text-4xl font-bold mb-6'>Work Experience</h1>
		<motion.div
			className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{experiences.map((exp, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
				>
					<Experience {...exp} />
				</motion.div>
			))}
		</motion.div>
	</div>
);

export default Experiences;
