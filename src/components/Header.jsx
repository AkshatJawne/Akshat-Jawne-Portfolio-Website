import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
	<header className='bg-gray-900 text-white py-4 w-full z-10'>
		<nav className='container mx-auto flex justify-between'>
			<h1 className='text-xl font-bold'>Akshat Jawne</h1>
			<ul className='flex space-x-4'>
				<li>
					<Link to='home' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>
						Home
					</Link>
				</li>
				<li>
					<Link to='experiences' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>
						Experiences
					</Link>
				</li>
				<li>
					<Link to='projects' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>
						Projects
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
