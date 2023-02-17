import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';

const PropertyCardContainer = () => {
    return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
			<PropertyCard />
		</div>
	);
};

export default PropertyCardContainer;