import React from 'react';

const Experience = ({ title, company, description, image, dateRange, location, link }) => (
	<div className='bg-white shadow-md rounded-lg p-4 mb-4'>
		<img src={image} alt={company} className='w-full h-44 object-cover rounded-lg' />
		<h2 className='text-xl font-semibold mt-4'>{title}</h2>
		<h3 className='text-blue-600'>
			<a href={link}>{company}</a>
		</h3>
		<p className='text-gray-500'>
			{dateRange} | {location}
		</p>
		<p className='text-gray-700 mt-2'>{description}</p>
	</div>
);

export default Experience;
