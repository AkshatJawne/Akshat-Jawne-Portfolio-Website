import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

const App = () => (
	<div>
		<Header />
		<div id='home'>
			<Home />
		</div>
		<div id='experiences' className='mt-20'>
			<Experiences />
		</div>
		<div id='projects' className='mt-20'>
			<Projects />
		</div>
		<Footer />
	</div>
);

export default App;
