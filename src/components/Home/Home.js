import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchAndFilterArea from '../SearchAndFilterArea/SearchAndFilterArea';
import PropertyCardContainer from '../PropertyCardContainer/PropertyCardContainer';

const Home = () => {
	return (
		<div className='space-y-10'>
			<Navbar />
			<div className='container mx-auto space-y-10'>
				<SearchAndFilterArea />
				<PropertyCardContainer />
			</div>
		</div>
	);
};

export default Home;
