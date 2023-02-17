import React from 'react';
import './PropertyCard.css';

const PropertyCard = () => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img
					src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'
					alt='Shoes'
				/>
			</figure>
			<div
				className='card-body card-body-area relative space-y-5'
				data-label='✨ Popular'
			>
				<div className='space-y-1'>
					<div className='flex justify-between items-center'>
						<div>
							<span className='text-2xl text-primary'>
								$2,700
							</span>
							<span className='text-gray-600 text-sm'>
								/month
							</span>
                        </div>
                        <div>
                            <span className='text-2xl'>❤️</span>
                        </div>
					</div>
					<h2 className='card-title'>Beverly Springfield</h2>
					<p className='text-gray-600'>
						2699 Green Valley, Highland Lake, FL
					</p>
				</div>
				<div className='card-actions justify-between border-t gap-0 pt-5 text-sm'>
					<div>
						<span>🛏️</span>
						<span>3 Beds</span>
					</div>
					<div>
						<span>🛁</span>
						<span>2 Bathrooms</span>
					</div>
					<div>
						<span>⏹️</span>
						<span>6x7.5 m2</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
