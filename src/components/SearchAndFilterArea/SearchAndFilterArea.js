import React from 'react';

const SearchAndFilterArea = () => {
    return (
		<div className='space-y-10'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>
					Search properties to rent
				</h1>
				<input
					type='text'
					placeholder='Search with search bar'
					className='input input-bordered w-full max-w-xs bg-white'
				/>
			</div>
			<div className='flex bg-white rounded-lg'>
				<div className='form-control flex-1 space-y-2 border-r p-5'>
					<label className='pl-4'>Location</label>
					<select className='select select-ghost outline-none'>
						<option disabled selected>
							New York, USA
						</option>
						<option>Svelte</option>
						<option>Vue</option>
						<option>React</option>
					</select>
				</div>
				<div className='form-control flex-1 space-y-2 border-r p-5'>
					<label className='pl-4'>When</label>
					<select className='select select-ghost outline-none'>
						<option disabled selected>
							New York, USA
						</option>
						<option>Svelte</option>
						<option>Vue</option>
						<option>React</option>
					</select>
				</div>
				<div className='form-control flex-1 space-y-2 border-r p-5'>
					<label className='pl-4'>Price</label>
					<select className='select select-ghost outline-none'>
						<option disabled selected>
							New York, USA
						</option>
						<option>Svelte</option>
						<option>Vue</option>
						<option>React</option>
					</select>
				</div>
				<div className='form-control flex-1 space-y-2 border-r p-5'>
					<label className='pl-4'>Property Type</label>
					<select className='select select-ghost outline-none'>
						<option disabled selected>
							New York, USA
						</option>
						<option>Svelte</option>
						<option>Vue</option>
						<option>React</option>
					</select>
				</div>
				<div className='form-control flex-1 space-y-2 flex justify-center items-center p-5'>
					<button className='btn btn-primary'>Search</button>
				</div>
			</div>
		</div>
	);
};

export default SearchAndFilterArea;