import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchAndFilterArea from '../SearchAndFilterArea/SearchAndFilterArea';
import PropertyCardContainer from '../PropertyCardContainer/PropertyCardContainer';
import Spinner from '../Spinner/Spinner';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [reload, setReload] = useState(false);
	const [properties, setProperties] = useState([]);
	const [locations, setLocations] = useState([]);
	const [propertiesType, setPropertiesType] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch('properties.json')
			.then((res) => res.json())
			.then((data) => {
				setProperties(data);
				const locationsData = [
					...new Set(data.map((property) => property.location)),
				];
				setLocations(locationsData);
				const propertiesTypeData = [
					...new Set(data.map((property) => property.propertyType)),
				];
				setPropertiesType(propertiesTypeData);
				setLoading(false);
			});
	}, []);

	const handleSearch = (event) => {
		event.preventDefault();
		setReload(true)
		const form = event.target;
		const searchLocation = form.location.value;
		const searchWhen = form.when.value;
		const searchMinPrice = parseInt(form.price.value.split('-')[0]);
		const searchMaxPrice = parseInt(form.price.value.split('-')[1]);
		const searchPropertyType = form.propertyType.value;
		const searchQuery = {
			searchLocation,
			searchWhen,
			searchMinPrice,
			searchMaxPrice,
			searchPropertyType,
		};
		console.log(searchQuery);

		fetch('properties.json')
			.then((res) => res.json())
			.then((data) => {
				const filterData = data.filter(
					(singleProperty) =>
						singleProperty.location === searchLocation &&
						singleProperty.propertyType === searchPropertyType &&
						singleProperty.price >= searchMinPrice &&
						singleProperty.price <= searchMaxPrice
				);
				setProperties(filterData);
				setReload(false)
			});
	};

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<Spinner />
			</div>
		);
	}

	return (
		<div className='space-y-10'>
			<Navbar />
			<div className='container mx-auto space-y-10 px-8 md:px-4'>
				<SearchAndFilterArea
					locations={locations}
					propertiesType={propertiesType}
					handleSearch={handleSearch}
					count={properties.length}
				/>
				{reload && (
					<div className='flex justify-center'>
						<Spinner />
					</div>
				)}
				{!reload && <PropertyCardContainer properties={properties} />}
			</div>
		</div>
	);
};

export default Home;
