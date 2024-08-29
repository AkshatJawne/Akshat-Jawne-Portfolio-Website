import React from 'react';

const Project = ({ title, description, link }) => (
	<div className='bg-white shadow-md rounded-lg p-4 mb-4'>
		<h2 className='text-xl font-semibold'>{title}</h2>
		<p className='text-gray-700 mt-2'>{description}</p>
		<a href={link} className='text-blue-500 hover:underline mt-4 block'>
			View on GitHub
		</a>
	</div>
);

export default Project;
