import React from 'react';
import Experience from '../components/Experience';

const experiences = [
	{
		title: 'Software Engineer',
		company: 'Deephaven Data Labs',
		description: 'Built a low-latency model for Kafka data streaming architecture...',
		image: '/assets/coop/deephaven.jpg',
		dateRange: 'May 2024 - Aug 2024',
		location: 'New York, NY',
	},
	{
		title: 'Systems Software Developer',
		company: 'Ford Motor Company',
		description: 'Developed a data visualization platform with Python and React.js...',
		image: '/assets/coop/ford.jpeg',
		dateRange: 'Sept 2023 - Dec 2023',
		location: 'Oakville, ON',
	},
	{
		title: 'Software Developer',
		company: 'Deep Trekker',
		description: 'Developed a data visualization platform with Python and React.js...',
		image: '/assets/coop/dt.jpeg',
		dateRange: 'Jan 2023 - Apr 2023',
		location: 'Kitchener, ON',
	},
];

const Experiences = () => (
	<div className='container mx-auto my-10'>
		<h1 className='text-4xl font-bold mb-6'>My Experiences</h1>
		{experiences.map((exp, index) => (
			<Experience key={index} {...exp} />
		))}
	</div>
);

export default Experiences;
