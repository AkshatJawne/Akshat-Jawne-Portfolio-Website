import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/experiences' element={<Experiences />} />
			<Route path='/projects' element={<Projects />} />
		</Routes>
		<Footer />
	</Router>
);

export default App;
