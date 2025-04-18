import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/Experience';
import deephavenLogo from '../assets/coop/deephaven.png';
import fordLogo from '../assets/coop/ford.jpg';
import dtLogo from '../assets/coop/dt.jpg';
import vividSeatsLogo from "../assets/coop/vividseats.png"

const experiences = [
    {
		title: 'Software Engineer',
		company: 'Vivid Seats',
		description: 'Stack: Node.js, TypeScript, Java, React.js, AWS',
		image: vividSeatsLogo,
		dateRange: 'Jan 2025 - Present',
		location: 'Chicago, IL',
		link: 'https://www.vividseats.com/',
	},
	{
		title: 'Software Engineer',
		company: 'Deephaven Data Labs',
		description: 'Stack: Python, Java, TypeScript, React.js, Docker',
		image: deephavenLogo,
		dateRange: 'May 2024 - Aug 2024',
		location: 'Minneapolis, MN',
		link: 'https://deephaven.io/',
	},
	{
		title: 'Systems Software Developer',
		company: 'Ford Motor Company',
		description: 'Stack: TypeScript, Python, Next.js, React.js, SQL',
		image: fordLogo,
		dateRange: 'Sept 2023 - Dec 2023',
		location: 'Toronto, ON',
		link: 'https://www.ford.com/',
	},
	{
		title: 'Software Developer',
		company: 'Deep Trekker',
		description: 'Stack: JavaScript, Node.js, React.js, Tailwind CSS',
		image: dtLogo,
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
