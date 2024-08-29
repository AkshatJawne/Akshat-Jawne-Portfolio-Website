import React from 'react';
import { Typed } from 'react-typed';

const Home = () => (
	<div className='container mx-auto my-10 text-center'>
		<h1 className='text-4xl font-bold mb-4'>
			<Typed
				strings={[
					"Hi, I'm Akshat Jawne,",
					'a Computer Engineering student',
					'with a passion for software development.',
				]}
				typeSpeed={50}
				backSpeed={30}
				loop
			/>
		</h1>
		<p className='text-gray-700 mt-4'>
			I'm currently seeking opportunities to apply my skills in real-world projects. Explore my experiences and
			projects below.
		</p>
	</div>
);

export default Home;
