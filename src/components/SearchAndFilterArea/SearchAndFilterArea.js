import React from 'react';

const SearchAndFilterArea = ({
	locations,
	propertiesType,
	handleSearch,
	count,
}) => {
	return (
		<div className='space-y-10'>
			<div className='flex justify-between items-center flex-col text-center space-y-2 md:flex-row md:text-left'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold'>
						Search properties to rent
					</h1>
					<div>
						<h3 className='text-lg font-semibold'>
							{count} Properties Available
						</h3>
					</div>
				</div>
				<input
					type='text'
					placeholder='Search with search bar'
					className='input input-bordered w-full max-w-xs bg-white'
				/>
			</div>
			<form onSubmit={handleSearch} className=' bg-white rounded-lg grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>
				<div className='form-control  space-y-2 border-r p-5'>
					<label className='pl-4'>Location</label>
					<select
						name='location'
						className='select select-ghost outline-none'
					>
						{locations.map((location, index) => (
							<option key={index}>{location}</option>
						))}
					</select>
				</div>
				<div className='form-control  space-y-2 border-r p-5'>
					<label className='pl-4'>When</label>
					{/* <select className='select select-ghost outline-none'>
						<option disabled selected>
							New York, USA
						</option>
						<option>Svelte</option>
						<option>Vue</option>
						<option>React</option>
					</select> */}
					<input
						className='input bg-white active:border-none'
						type='date'
						name='when'
					/>
				</div>
				<div className='form-control  space-y-2 border-r p-5'>
					<label className='pl-4'>Price</label>
					<select
						name='price'
						className='select select-ghost outline-none'
					>
						<option value={'250-500'}>$250-$500</option>
						<option value={'501-1000'}>$501-$1000</option>
						<option value={'1001-1500'}>$1001-$1500</option>
						<option value={'1501-2000'}>$1501-$2000</option>
						<option value={'2001-2500'}>$2001-$2500</option>
					</select>
				</div>
				<div className='form-control  space-y-2 border-r p-5'>
					<label className='pl-4'>Property Type</label>
					<select
						name='propertyType'
						className='select select-ghost outline-none'
					>
						{propertiesType.map((propertyType, index) => (
							<option key={index}>{propertyType}</option>
						))}
					</select>
				</div>
				<div className='form-control space-y-2 flex justify-center items-center p-5 md:col-span-4 lg:col-span-1 md:border-t lg:border-none'>
					<button className='btn btn-primary'>Search</button>
				</div>
			</form>
		</div>
	);
};

export default SearchAndFilterArea;
