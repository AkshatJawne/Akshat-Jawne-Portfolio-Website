import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => (
	<footer className='bg-gray-900 text-white py-4 mt-10'>
		<div className='container mx-auto text-center'>
			<div className='flex justify-center space-x-6 mb-4'>
				<a href='https://github.com/AkshatJawne'>
					<FaGithubSquare size={48}></FaGithubSquare>
				</a>
				<a href='mailto:akshatjawne@gmail.com'>
					<MdMail size={50}></MdMail>
				</a>
				<a href='https://www.linkedin.com/in/akshatjawne/'>
					<IoLogoLinkedin size={50}></IoLogoLinkedin>
				</a>
			</div>
			<p>© 2024 Akshat Jawne</p>
		</div>
	</footer>
);

export default Footer;
