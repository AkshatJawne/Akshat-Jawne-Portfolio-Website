import React from 'react';

const Header = () => (
	<header className='bg-gray-900 text-white py-4'>
		<nav className='container mx-auto flex justify-between'>
			<h1 className='text-xl font-bold'>Akshat Jawne</h1>
			<ul className='flex space-x-4'>
				<li>
					<a href='/' className='hover:text-gray-400'>
						Home
					</a>
				</li>
				<li>
					<a href='/experiences' className='hover:text-gray-400'>
						Experience
					</a>
				</li>
				<li>
					<a href='/projects' className='hover:text-gray-400'>
						Projects
					</a>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
