import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';

const PropertyCardContainer = ({ properties }) => {
	return (
		<div>
			{properties.length > 0 && (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{properties.map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>
			)}
			{!properties.length > 0 && <h3 className='text-2xl font-light italic'>No Properties Found</h3>}
		</div>
	);
};

export default PropertyCardContainer;
