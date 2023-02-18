import React from 'react';
import { RiHomeSmile2Fill } from 'react-icons/ri';

const Navbar = () => {
	const navMenu = (
		<>
			<li>
				<a>Rent</a>
			</li>
			<li>
				<a>Buy</a>
			</li>
			<li>
				<a>Sell</a>
			</li>
			<li tabIndex={0}>
				<a className='justify-between'>
					Manage Property
					<svg
						className='fill-current'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
					</svg>
				</a>
				<ul className='p-2'>
					<li>
						<a>See More</a>
					</li>
					<li>
						<a>See More</a>
					</li>
				</ul>
			</li>
			<li tabIndex={0}>
				<a className='justify-between'>
					Recourses
					<svg
						className='fill-current'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
					</svg>
				</a>
				<ul className='p-2'>
					<li>
						<a>See More</a>
					</li>
					<li>
						<a>See More</a>
					</li>
				</ul>
			</li>
		</>
	);
	return (
		<div className='navbar bg-base-200'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						{navMenu}
					</ul>
				</div>
				<div className='flex justify-center items-center m-3 normal-case text-2xl font-bold '>
					<RiHomeSmile2Fill className='text-primary text-3xl' />
					<span>Estatery</span>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					{navMenu}
				</ul>
			</div>
			<div className='navbar-end gap-4 mr-3'>
				<a className='btn btn-outline btn-primary'>Login</a>
				<a className='btn btn-primary'>Sign up</a>
			</div>
		</div>
	);
};

export default Navbar;
