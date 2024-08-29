import React from 'react';
import { ReactTyped } from 'react-typed';

const Home = () => (
	<div className='container mx-auto my-10 pt-40 text-center'>
		<h1 className='text-4xl font-bold mb-4'>
			<ReactTyped
				strings={[
					'Computer Engineering student at UWaterloo',
					'Previous SWE @ Deephaven Data Labs, Ford, Deep Trekker',
				]}
				typeSpeed={40}
				backSpeed={40}
				loop
			/>
		</h1>
		<p className='text-gray-700 mt-4'>
			I'm currently seeking Winter 2025 internship opportunities to apply my skills in real-world projects.
			Explore my experiences and projects below.
		</p>
	</div>
);

export default Home;
