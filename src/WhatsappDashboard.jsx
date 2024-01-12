const WhatsappDashboard = () => {
	return (
		<div className='bg-green-900'>
			<header className='flex items-center justify-between px-2 py-2 text-slate-100'>
				<strong className='text-lg'>Business</strong>
				<div className='block'>
					<a
						href='#'
						className='inline-block cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-7 h-7 text-slate-100'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
							/>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
							/>
						</svg>
					</a>

					<a
						href='#'
						className='inline-block pl-4 cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-7 h-7'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
					</a>
					<a
						href='#'
						className='inline-block pl-4 curso-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-7 h-7 '>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
							/>
						</svg>
					</a>
				</div>
			</header>

			{/* Menu de opciones */}
			<ul className='flex justify-between gap-4 px-2 py-2 text-white'>
				<li className='border-green-500 cursor-pointer hover:border-b-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='w-7 h-7 text-slate-100 hover:text-green-500 '>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z'
						/>
					</svg>
				</li>
				<li className='flex-grow text-lg text-center border-green-500  hover:border-b-2'>
					<label className='cursor-pointer hover:text-green-500'>
						Chats <span className='bg-green-600 rounded-full w-5 h-5 p-0.5'>38</span>
					</label>
				</li>
				<li className='flex-grow text-lg text-center border-green-500  hover:border-b-2'>
					<label className='cursor-pointer hover:text-green-500'>Updates</label>
				</li>
				<li className='flex-grow text-lg text-center border-green-500  hover:border-b-2'>
					<label className='cursor-pointer hover:text-green-500'>Calls</label>
				</li>
			</ul>

			{/* Lista de chats */}
			<main className='pt-4 text-white border-t-2 bg-green-950'>
				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Jefferson David (You) </span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-green-500'>12/12/2020</span> <br />
						<span className='rounded-full bg-green-500 text-sm w-5 h-5 p-0.5'>12</span>
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Gefesita💖</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur vocemi...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-slate-300'>09:00 PM</span> <br />
						{/* <span className='w-5 h-5 text-sm'>18</span> */}
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Alexander Motoche, Ing. Software </span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-green-500'>09:23 PM</span> <br />
						<span className='rounded-full bg-green-500 text-sm w-5 h-5 p-0.5'>18</span>
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Extrañaaaa xd</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur vocemi...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-slate-300'>09:00 PM</span> <br />
						{/* <span className='w-5 h-5 text-sm'>18</span> */}
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Sebastian </span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur vocemi...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-slate-300'>09:00 PM</span> <br />
						{/* <span className='w-5 h-5 text-sm'>18</span> */}
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>No contestar</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur vocemi...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-slate-300'>09:00 PM</span> <br />
						{/* <span className='w-5 h-5 text-sm'>18</span> */}
					</label>
				</p>
				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>No contestar⚠️</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur vocemi...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-slate-300'>09:00 PM</span> <br />
						{/* <span className='w-5 h-5 text-sm'>18</span> */}
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Grupo Inteligencia Artificial Exposición 2</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-green-500'>09:23 PM</span> <br />
						<span className='rounded-full bg-green-500 text-sm w-5 h-5 p-0.5'>18</span>
					</label>
				</p>
				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>No contestar x2</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur vocemi...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-slate-300'>09:00 PM</span> <br />
						{/* <span className='w-5 h-5 text-sm'>18</span> */}
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Grupo Inteligencia Artificial Exposición</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-green-500'>09:23 PM</span> <br />
						<span className='rounded-full bg-green-500 text-sm w-5 h-5 p-0.5'>18</span>
					</label>
				</p>

				<p className='flex gap-2 px-2 mb-3 cursor-pointer'>
					<img
						src='src/img/favicon.ico'
						className='self-center w-10 h-10 rounded-full'
						alt='chat de un estudiante'
					/>
					<label className='flex-grow'>
						<span>Grupo Inteligencia Artificial Exposición</span>
						<br />{' '}
						<span className='text-sm text-slate-300'>
							Lorem ipsum, dolor sit amet consectetur...
						</span>{' '}
					</label>
					<label className='text-center'>
						<span className='text-xs text-green-500'>09:23 PM</span> <br />
						<span className='rounded-full bg-green-500 text-sm w-5 h-5 p-0.5'>18</span>
					</label>
				</p>
			</main>
		</div>
	);
};
export default WhatsappDashboard;
