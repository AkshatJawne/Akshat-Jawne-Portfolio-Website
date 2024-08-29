import React from 'react';
import { motion } from 'framer-motion';
import watchd from '../assets/Watchd.png';
import connecta from '../assets/Connecta.png';
import arimaStockPrediction from '../assets/stockPrediction.png';
import letsGoCustomers from '../assets/letsgocustomers.png';
import cruze from '../assets/cruze.png';
import airbnbDataAnalysis from '../assets/airbnbDataAnalysis.png';
import bGeneratify from '../assets/B-Generatify.png';
import Project from '../components/Project';

const allProjects = [
	{
		id: 1,
		title: 'B-Generatify',
		description: 'An AI text generational tool that outputs custom blogs based on inputted Youtube video links.',
		technologies: 'Python, JavaScript, Django, OpenAI API, AssemblyAI',
		src: bGeneratify,
		link: 'https://github.com/AkshatJawne/B-Generatify',
	},
	{
		id: 2,
		title: 'jLang',
		description: 'A compiler (lexer, parser, and assembler) for a turing-complete programming language, jLang.',
		technologies: 'C, C++',
		src: bGeneratify,
		link: 'https://github.com/AkshatJawne/jLang',
	},
	{
		id: 3,
		title: 'LetsGOCustomers',
		description:
			'A customer management platform with CRUD functionality, featuring server and serverless archtiectures.',
		technologies: 'Go, AWS Lambda, AWS DynamoDB, GraphQL, MongoDB',
		src: letsGoCustomers,
		link: 'https://github.com/AkshatJawne/LetsGOCustomers',
	},
	{
		id: 4,
		title: 'Connecta',
		description:
			'A responsive full-stack social media application with post sharing, liking, and commenting. Built with MERN Stack, featuring a custom REST API.',
		technologies: 'JavaScript, React.js, Express.js, Node.js, MongoDB, Chakra UI',
		src: connecta,
		link: 'https://github.com/AkshatJawne/Connecta',
	},
	{
		id: 5,
		title: 'Flight Fare Prediction Pipeline',
		description: 'A machine learning pipeline capable of predicting flight prices with 99.5% accuracy.',
		technologies: 'Python',
		src: connecta,
		link: 'https://github.com/AkshatJawne/FlightFarePrediction',
	},
	{
		id: 6,
		title: 'Cruze',
		description:
			'A full-stack ride-share, Uber-like platform with phone text verification, dynamic routing, and websockets.',
		technologies: 'PHP, JavaScript, Laravel, Vue.js',
		src: cruze,
		link: 'https://github.com/AkshatJawne/Cruze',
	},
	{
		id: 7,
		title: 'ARIMA Stock Prediction Model',
		description:
			'An Autoregressive Integrated Moving Average (ARIMA) stock  pricing model leveraging pandas, numpy, scikit-learn, and statsmodels to forecast prices of stocks with nearly 85% accuracy.',
		technologies: 'Python',
		src: arimaStockPrediction,
		link: 'https://github.com/AkshatJawne/ARIMA-Stock-Prediction-Model',
	},
	{
		id: 8,
		title: 'AirBnb Data Exploration',
		description: 'Data cleaning and analysis on a dataset of over 200,000 NYC Airbnb Properties.',
		technologies: 'SQL, PostgreSQL',
		src: airbnbDataAnalysis,
		link: 'https://github.com/AkshatJawne/AirbnbDataExploration',
	},
	{
		id: 9,
		title: 'Watchd',
		description:
			'An interactive dashboard displaying trending movies worldwide in various categories, through real-time data retrieved from The Movie Database API.',
		technologies: 'JavaScript, Next.js, React.js, Tailwind CSS',
		src: watchd,
		link: 'https://watchd.vercel.app/',
	},
];

const Projects = () => (
	<div className='container mx-auto my-10'>
		<h1 className='text-4xl font-bold mb-6'>Projects</h1>
		<motion.div
			className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{allProjects.map((project, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
				>
					<Project {...project} />
				</motion.div>
			))}
		</motion.div>
	</div>
);

export default Projects;
