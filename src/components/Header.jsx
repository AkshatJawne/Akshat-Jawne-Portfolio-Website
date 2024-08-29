import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Function to handle window resize
	const handleResize = () => {
		if (window.innerWidth >= 768) {
			setIsMobile(false);
			setIsOpen(false);
		} else {
			setIsMobile(true);
		}
	};

	// Attach event listener on component mount and cleanup on unmount
	useEffect(() => {
		handleResize(); // Set the initial state
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className='bg-gray-900 text-white py-4 w-full z-10'>
			<nav className='container mx-auto flex justify-between items-center'>
				<h1 className='text-xl font-bold'>Akshat Jawne</h1>
				<div className='md:hidden'>
					<button onClick={toggleMenu} className='text-white focus:outline-none'>
						{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>
				<ul className={`md:flex space-x-4 ${isMobile ? 'hidden' : 'flex'}`}>
					<li>
						<Link to='home' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='experiences'
							smooth={true}
							duration={500}
							className='cursor-pointer hover:text-gray-400'
						>
							Experience
						</Link>
					</li>
					<li>
						<Link to='projects' smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>
							Projects
						</Link>
					</li>
				</ul>
			</nav>
			{isMobile && isOpen && (
				<div className='md:hidden bg-gray-900'>
					<ul className='flex flex-col items-center space-y-4 py-4'>
						<li>
							<Link
								to='home'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-gray-400'
								onClick={toggleMenu}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='experiences'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-gray-400'
								onClick={toggleMenu}
							>
								Experience
							</Link>
						</li>
						<li>
							<Link
								to='projects'
								smooth={true}
								duration={500}
								className='cursor-pointer hover:text-gray-400'
								onClick={toggleMenu}
							>
								Projects
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
