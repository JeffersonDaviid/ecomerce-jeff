import {useState} from 'react';
import './index.css';
import './animations.css';

// IMPORTAR ICONS
import facebookIcon from './SVG/facebook-svgrepo-com.svg';
import linkedinIcon from './SVG/linkedin-svgrepo-com.svg';
import instagramIcon from './SVG/instagram-svgrepo-com.svg';
import whatsappIcon from './SVG/whatsapp-whats-app-svgrepo-com.svg';

function App() {
	const [showMenuMobile, setShowMenuMobile] = useState(false);
	const [isOpenGetHelp, setIsOpenGetHelp] = useState(false);
	const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);
	const [isOpenPromotionsDiscounts, setIsOpenPromotionsDiscounts] = useState(false);

	const [isOpenChatBox, setIsOpenChatBox] = useState(false);

	const trendClothes = [
		{
			id: 1,
			name: 'Chaqueta acolchada reciclada Essential',
			price: 56,
			discount: 50,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KB0KB08337_L2M_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 2,
			name: 'Chaqueta acolchada New York amplia',
			price: 69,
			discount: 18,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KB0KB08785_C3J_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 3,
			name: 'Chaqueta acolchada New York de corte amplio',
			price: 62,
			discount: 36,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KG0KG07551_YBH_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 4,
			name: 'Chaqueta vaquera de corte cropped',
			price: 1000,
			discount: 22,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KB0KB08337_DW5_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 5,
			name: 'Chaqueta acolchada reciclada Essential',
			price: 42,
			discount: 24,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KG0KG07554_YBH_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 6,
			name: 'Chaqueta acolchada reciclada Essential',
			price: 84,
			discount: 30,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KG0KG07467_1AB_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 7,
			name: 'Chaqueta acolchada reciclada Essential',
			price: 118,
			discount: 25,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KB0KB08615_0QJ_main?$b2c_updp_recommendations_767$',
		},
		{
			id: 8,
			name: 'Chaqueta acolchada reciclada Essential',
			price: 42,
			discount: 18,
			img: 'https://tommy-europe.scene7.com/is/image/TommyEurope/KB0KB08341_DW5_main?$b2c_updp_recommendations_767$',
		},
	];

	const chat = [
		{id: 1, message: 'Hola, ¿cómo podemos ayudarte?', fecha: '12:00'},
		{
			id: 2,
			message: 'Hola, ¿cómo podemos ayudarte?',
			fecha: '12:00',
		},
	];

	return (
		<>
			<header className='sticky top-0 z-10 shadow '>
				<nav className='px-2 text-white bg-slate-700'>
					<ul className='flex items-center justify-between h-12 gap-4 mx-auto sm:h-16 lg:max-w-5xl'>
						<li
							className='sm:hidden'
							onClick={() => setShowMenuMobile(!showMenuMobile)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-7 h-7 cursor-pointer'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</li>

						<li>
							<a href='#'></a>
							<a
								href='#'
								className='text-xl font-abrilFatface'>
								JEFF
							</a>
						</li>

						<li className='hidden sm:inline '>
							<a href='#'>MEN</a>
						</li>

						<li className='hidden sm:inline '>
							<a href='#'>WOMEN</a>
						</li>

						<li className='hidden sm:inline '>
							<a href='#'>KIDS</a>
						</li>

						<li className='grow sm:hidden lg:hidden'></li>
						<li className='gap-2 rounded-lg sm:grow sm:flex sm:bg-white sm:px-2 sm:py-1'>
							<input
								type='text'
								className='hidden text-black border-none sm:inline lg:inline grow outline-0'
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-7 h-7 cursor-pointer sm:text-black'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
								/>
							</svg>
						</li>

						<li>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-7 h-7 cursor-pointer'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								/>
							</svg>
						</li>

						<li>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-7 h-7 cursor-pointer'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
								/>
							</svg>
						</li>

						<li>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-7 h-7 cursor-pointer'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
								/>
							</svg>
						</li>
					</ul>
				</nav>

				{showMenuMobile && (
					<menu className='sm:hidden'>
						<a
							href='#'
							className='block w-full px-2 py-1 font-semibold focus:bg-sky-700 focus:bg-opacity-50'>
							MEN
						</a>
						<a
							href='#'
							className='block w-full px-2 py-1 font-semibold focus:bg-sky-700 focus:bg-opacity-50'>
							WOMEN
						</a>
						<a
							href='#'
							className='block w-full px-2 py-1 font-semibold focus:bg-sky-700 focus:bg-opacity-50'>
							KIDS
						</a>
					</menu>
				)}
			</header>

			{/* DESCUENTOS */}
			<a
				href='#'
				className='flex flex-col items-center gap-1 p-2 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 text-slate-100'>
				<button className='px-5 py-1 font-semibold rounded-lg text-slate-900 bg-slate-50 max-w-min'>
					SALE
				</button>
				<strong className='max-w-lg text-3xl italic font-extrabold text-center'>
					EXTRA 30% OFF 1000S OF STYLES!
				</strong>
				<strong className='text-xl font-extrabold'>UP TO 80% OFF ALREADY</strong>
				<strong className='font-semibold'>
					With code: <span className='px-2 border border-slate-800'>SALE</span>
				</strong>
				<p className='text-xs'>
					Sale items only. Valid on selected products only. See website banner for full
					Ts&Cs.
				</p>
			</a>

			{/* HERO */}
			<article className='flex flex-col overflow-hidden md:flex-row'>
				<p className='relative w-full overflow-hidden md:w-1/2'>
					<ul className='flex overflow-hidden flex-nowrap h-96 md:w-1/2 slide-home'>
						<li className='w-full '>
							<img
								className='object-cover object-center w-full h-full'
								src='https://img.freepik.com/premium-photo/trendy-look-beautiful-young-couple-denim-wear-smiling_425904-7447.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702857600&semt=ais'
								alt=''
							/>
						</li>
						<li className='w-full '>
							<img
								className='object-cover object-center w-full h-full'
								src='https://eu-images.contentstack.com/v3/assets/blt5cc5bc06bca6aec9/bltc481341de25d2761/659bdfe95431c90407b929dd/Split_-_Mobile_(2).jpg?branch=prod_alias&format=webply&quality=70&width=768&crop=1440,1151,x0,y0'
								alt=''
							/>
						</li>
						<li className='w-full '>
							<img
								className='object-cover object-right w-full h-full'
								src='https://st4.depositphotos.com/4732855/21189/i/450/depositphotos_211893996-stock-photo-stylish-tall-arabian-man-model.jpg'
								alt=''
							/>
						</li>
						<li className='w-full '>
							<img
								className='object-cover object-center w-full h-full'
								src='https://img.freepik.com/free-photo/beautiful-girl-posing-outside-fashion-style-shooting_144627-77578.jpg'
								alt=''
							/>
						</li>
						<li className='w-full '>
							<img
								className='object-cover object-center w-full h-full'
								src='https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg'
								alt=''
							/>
						</li>
					</ul>
					<label className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-auto text-2xl font-semibold text-white transition-opacity bg-opacity-50 opacity-0 bg-slate-900 hover:opacity-100'>
						NEW STYLE
					</label>
				</p>

				<p className='p-4 text-justify md:w-1/2 md:self-center'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa consequatur
					necessitatibus atque quaerat consequuntur blanditiis soluta nihil obcaecati
					veniam molestiae optio repellat, tempore laborum deleniti. Ex fugiat minus
					voluptatum.
				</p>
			</article>

			{/* CARUSEL */}
			<main className='flex flex-col items-center p-4'>
				<h1 className='my-10 text-2xl font-bold text-center'>NEW STYLE FOR FAMILY</h1>
				<div className='flex w-full gap-2 overflow-x-auto text-center sm:w-10/12 lg:w-4/'>
					<article className='h-auto w-96 sm:w-1/2'>
						<a href='#'>
							<img
								className='object-cover object-center w-full h-72 sm:h-96'
								src='https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1699344933/737656_XJF4V_1043_002_100_0000_Light-Polo-de-algodn-con-GG-entrelazada.jpg'
								alt=''
							/>
							MEN
							<button className='flex items-center gap-1 px-3 py-1 my-3 font-semibold text-white bg-black rounded-2xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-5 h-5 inline-block'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
									/>
								</svg>
								SHOP
							</button>
						</a>
					</article>
					<article className='h-auto w-96 sm:w-1/2'>
						<a href='#'>
							<img
								className='object-cover object-center w-full h-72 sm:h-96'
								src='https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1695831384/774516_ZAO5D_6349_002_100_0000_Light-Falda-de-lana-con-ribete-trenzado.jpg'
								alt=''
							/>
							WOMEN
							<button className='flex items-center gap-1 px-3 py-1 my-3 font-semibold text-white bg-black rounded-2xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-5 h-5 inline-block'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
									/>
								</svg>
								SHOP
							</button>
						</a>
					</article>
					<article className='h-auto w-96 sm:w-1/2'>
						<a href='#'>
							<img
								className='object-cover object-top w-full h-72 sm:h-96'
								src='https://www.alvaromoreno.com/dw/image/v2/BGHK_PRD/on/demandware.static/-/Sites-amoreno_master_catalog/default/dw550669ab/images/hi-res/I23/Kids/Cazadoras/Parka_Skywear_611223505/CAM/611223505_CAM.jpg?sw=965&sh=1287'
								alt=''
							/>
							KIDS
							<button className='flex items-center gap-1 px-3 py-1 my-3 font-semibold text-white bg-black rounded-2xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-5 h-5 inline-block'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
									/>
								</svg>
								SHOP
							</button>
						</a>
					</article>
				</div>
			</main>

			{/* CHAT CONTAINER */}
			<div
				className='fixed right-0 z-10 p-4 bg-red-500 rounded-full cursor-pointer bottom-16 text-slate-200'
				onClick={() => setIsOpenChatBox(true)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-7 h-7 '>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
					/>
				</svg>

				<div
					className={`fixed flex flex-col bottom-0 right-0 w-full bg-white cursor-default h-full text-slate-900 p-4 md:w-96 md:h-2/3 md:bottom-5 md:pb-1 rounded-lg shadow-lg ${
						isOpenChatBox ? 'block' : 'hidden'
					}`}>
					<p className='flex items-center gap-1 pb-2 border-b border-slate-500'>
						<img
							className='object-cover object-center w-10 h-10 border border-white rounded-full'
							src='https://roast.dating/images/ben.webp'
							alt=''
						/>
						<img
							className='object-cover object-center w-10 h-10 -ml-3 border border-white rounded-full'
							src='https://img.freepik.com/premium-photo/happy-positive-girl-braces-teeth-young-beautiful-woman-outdoors-summer-sunny-park-smiling_157823-2285.jpg'
							alt=''
						/>
						<img
							className='object-cover object-center w-10 h-10 -ml-3 border border-white rounded-full'
							src='https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18665.jpg'
							alt=''
						/>
						<span className='ml-4 font-bold'>Chat</span>
					</p>

					<div className='flex flex-col h-full gap-2 pt-2 overflow-y-auto grow sm:h-1/3 text-slate-900'>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
						<p className='px-2 py-1 mr-auto bg-gray-200 rounded-bl-lg rounded-r-md w-fit'>
							<span>Buen día, en que puedo ayudarlo?</span>
							<br />
							<span className='text-xs text-slate-500'>10:00</span>
						</p>

						<p className='self-end px-2 py-1 ml-auto rounded-br-lg text-end bg-slate-900 rounded-l-md'>
							<span className='text-slate-200'>hola, como estas?</span>
							<br />
							<span className='text-xs text-slate-400'>10:00</span>
						</p>
					</div>

					<div className='bottom-0 left-0 flex items-center w-full gap-4 py-2 bg-inherit'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 cursor-pointer'>
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
						<input
							type='text'
							className='p-1 px-2 border rounded-xl grow border-slate-900'
						/>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 cursor-pointer'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
							/>
						</svg>
					</div>
				</div>
			</div>

			<span
				className={`fixed top-4 right-4 z-20 bg-slate-700 text-white hover:bg-opacity-50 bg-opacity-25 p-1 rounded-full cursor-pointer md:top-1/3 ${
					isOpenChatBox ? 'inline' : 'hidden'
				}`}
				onClick={() => setIsOpenChatBox(false)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-6 h-6'>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M6 18 18 6M6 6l12 12'
					/>
				</svg>
			</span>

			<article className='p-5 text-justify'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est laudantium
				quo explicabo ullam. Nesciunt excepturi velit eum iure enim hic quisquam dolores
				alias ipsa, facere voluptatem a dolore laboriosam!
			</article>

			<h3 className='p-2 mt-8 text-xl font-bold'>TENDENCIAS</h3>
			<div className='z-0 flex gap-1 pb-4 mx-2 overflow-x-auto flex-nowrap'>
				{trendClothes.map((item) => {
					return (
						<article
							key={item.id}
							className='relative flex flex-col flex-shrink-0 w-1/2 flex-grow-1 flex-basis-auto sm:w-1/3 md:w-1/4 lg:w-1/5'>
							<img
								src={item.img}
								alt={item.name}
								className='w-full'
							/>
							<h3>{item.name}</h3>
							<p className='mt-auto'>
								<span className='mr-2 line-through'>${item.price.toFixed(2)}</span>
								<strong className='text-red-600'>
									${(item.price - item.price * (item.discount / 100)).toFixed(2)}
								</strong>
								<span className='absolute px-2 font-semibold text-white bg-red-500 top-2 right-2'>{` - ${item.discount}%`}</span>
							</p>
						</article>
					);
				})}
			</div>

			<aside className='items-center p-4 my-10 space-y-8 sm:flex'>
				<img
					className='w-full sm:w-2/3'
					src='https://www.untuckit.com/cdn/shop/files/no-nearby-store.png?v=1626122497'
					alt=''
				/>
				<div className='space-y-4 sm:px-4 md:px-8 lg:px-16'>
					<p className='flex items-center gap-2 text-lg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 text-orange-700'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
							/>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
							/>
						</svg>
						<strong>VISITANOS</strong>
					</p>

					<p className=''>
						Drop by one of our stores and get the full UNTUCKit experience.
					</p>
					<br />
					<a
						href='#'
						className='font-semibold text-orange-700'>
						Find your nearest store
					</a>
				</div>
			</aside>

			{/* COMPONENTE PARA VER DETALLES DE PRENDAS */}
			<article className='flex flex-col overflow-hidden border-red-500 border0 lg:gap-28 md:flex-row'>
				<div className='overflow-hidden md:w-1/2 lg:w-3/4'>
					<div className='flex pb-4 overflow-hidden h-120 flex-nowrap '>
						<img
							className='w-full h-full md:w-1/2'
							src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiWSvRY2spKnBnqxlHtG3HLt6xlrgo476AZndnrL65RGmfaWVs'
							alt=''
						/>
						<img
							className='w-full h-full md:w-1/2'
							src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8unifo4pbCSMrm_PWPaHlSUjDLcNdH0aIb_fJUAbBnLkHcJT2'
							alt=''
						/>

						<img
							className='w-full h-full md:w-1/2'
							src='https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW32726_YBH_alternate1?$b2c_updp_mainImage_540$'
							alt=''
						/>
						<img
							className='w-full h-full md:w-1/2'
							src='https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW32726_YBH_alternate3?$b2c_updp_mainImage_540$'
							alt=''
						/>

						<img
							className='w-full h-full md:w-1/2'
							src='https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW32726_YBH_alternate4?$b2c_updp_mainImage_540$'
							alt=''
						/>
					</div>
					<div className='flex justify-center gap-1 overflow-x-auto'>
						<img
							className='object-contain object-center w-20 h-24'
							src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTiWSvRY2spKnBnqxlHtG3HLt6xlrgo476AZndnrL65RGmfaWVs'
							alt=''
						/>
						<img
							className='object-contain object-center w-20 h-24'
							src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8unifo4pbCSMrm_PWPaHlSUjDLcNdH0aIb_fJUAbBnLkHcJT2'
							alt=''
						/>

						<img
							className='object-contain object-center w-20 h-24'
							src='https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW32726_YBH_alternate1?$b2c_updp_mainImage_540$'
							alt=''
						/>
						<img
							className='object-contain object-center w-20 h-24'
							src='https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW32726_YBH_alternate3?$b2c_updp_mainImage_540$'
							alt=''
						/>

						<img
							className='object-contain object-center w-20 h-24'
							src='https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW32726_YBH_alternate4?$b2c_updp_mainImage_540$'
							alt=''
						/>
					</div>
				</div>
				<div className='px-4 space-y-4 md:w-1/2 lg:h-1/4'>
					<h3 className='text-lg'>SUDADERA CON MONOTIPO HILFIGER BORDADO</h3>
					<p>
						<span className='line-through'>$ 199,00</span>{' '}
						<strong className='text-red-600'>$ 129,00</strong>{' '}
						<span className='text-slate-600'>(Iva inc.)</span>
					</p>

					<p>
						<span>Talla:</span>

						<div className='grid grid-cols-3 gap-2 '>
							{['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
								<span
									key={size}
									className='flex items-center justify-center h-10 border border-slate-600 hover:bg-orange-100'>
									{size}
								</span>
							))}
						</div>
					</p>

					<button className='w-full py-4 font-semibold bg-orange-400'>
						PROBAR CON IA 🤖
					</button>
					<button className='w-full py-4 font-semibold text-white bg-slate-900 hover:bg-slate-950'>
						AÑADIR A LA CESTA
					</button>
				</div>
			</article>

			<footer className='flex flex-col grid-cols-3 gap-4 px-4 py-8 text-sm text-white bg-slate-900 sm:grid'>
				<ul className='pb-3 space-y-2 border-b-2 border-slate-300 sm:border-none'>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							TARGETAS DE REGALO
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							BUSCAR TIENDA
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							HACERSE MIEMBRO
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							NEW STYLE X GUCCI
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							NEW STYLE JOURNAL
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							ENVÍANOS TUS COMENTARIOS
						</a>
					</li>
				</ul>

				<ul className='flex items-center justify-between gap-2 sm:flex-col'>
					<li>OBTENER AYUDA</li>
					<ul className='flex-col hidden gap-1 sm:flex text-slate-400 '>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Esta del pedido
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Envío y entrega
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Devoluciones
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Cancelación del pedido
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Opciones de pago
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Saldo de la targeta de regalo
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Comunícate con nosotros
							</a>
						</li>
					</ul>
					{isOpenGetHelp ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6  sm:hidden'
							onClick={() => setIsOpenGetHelp(!isOpenGetHelp)}>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M5 12h14'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6  sm:hidden'
							onClick={() => setIsOpenGetHelp(!isOpenGetHelp)}>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					)}
				</ul>
				{isOpenGetHelp && (
					<ul className='space-y-1.5 text-slate-400 sm:hidden'>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Esta del pedido
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Envío y entrega
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Devoluciones
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Cancelación del pedido
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Opciones de pago
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Saldo de la targeta de regalo
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Comunícate con nosotros
							</a>
						</li>
					</ul>
				)}

				<ul className='flex items-center justify-between gap-2 sm:flex-col sm:justify-start'>
					<li>ACERCA DE NEW STYLE</li>
					<ul className='space-y-1.5 hidden sm:block text-slate-400'>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Noticias
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Empleo
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Inversiones
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Propósito
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Sustentabilidad
							</a>
						</li>
					</ul>

					{isOpenAboutUs ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 sm:hidden'
							onClick={() => setIsOpenAboutUs(!isOpenAboutUs)}>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M5 12h14'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 sm:hidden'
							onClick={() => setIsOpenAboutUs(!isOpenAboutUs)}>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					)}
				</ul>
				{isOpenAboutUs && (
					<ul className='space-y-1.5 text-slate-400 sm:hidden'>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Noticias
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Empleo
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Inversiones
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Propósito
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Sustentabilidad
							</a>
						</li>
					</ul>
				)}

				<ul className='flex items-center justify-between gap-2 sm:flex-col'>
					<li>PROMOCIONES Y DESCUENTOS</li>
					<ul className='space-y-1.5 hidden sm:block text-slate-400'>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Estudiantes
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Military
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Maestros
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								First Responders & Medical Professionals
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Cumpleaños
							</a>
						</li>
					</ul>
					{isOpenPromotionsDiscounts ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 sm:hidden'
							onClick={() => setIsOpenPromotionsDiscounts(!isOpenPromotionsDiscounts)}>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M5 12h14'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6 sm:hidden'
							onClick={() => setIsOpenPromotionsDiscounts(!isOpenPromotionsDiscounts)}>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					)}
				</ul>
				{isOpenPromotionsDiscounts && (
					<ul className='space-y-1.5 text-slate-400 sm:hidden'>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Estudiantes
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Military
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Maestros
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								First REsponders & Medical Professionals
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Cumpleaños
							</a>
						</li>
					</ul>
				)}

				<ul className='flex gap-3'>
					<li>
						<a href='#'></a>
						<a
							href='https://www.facebook.com/jeffersondavid27'
							target='_blank'>
							<img
								src={facebookIcon}
								className='w-6 h-6 '
							/>
						</a>
					</li>
					<li>
						<a href='#'></a>
						<a
							href='https://www.instagram.com/soyjeffersondavid/'
							target='_blank'>
							<img
								src={instagramIcon}
								className='w-6 h-6 '
							/>
						</a>
					</li>
					<li>
						<a href='#'></a>
						<a
							href='https://www.linkedin.com/in/jefferson-david-964083227/'
							target='_blank'>
							<img
								src={linkedinIcon}
								className='w-6 h-6 '
							/>
						</a>
					</li>
					<li>
						<a href='#'></a>
						<a
							href='https://api.whatsapp.com/send?phone=+593XXX-XXX-XXX'
							target='_blank'>
							<img
								src={whatsappIcon}
								className='w-6 h-6 '
							/>
						</a>
					</li>
				</ul>

				<ul className='space-y-1.5 text-slate-400'>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							Guias
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							Términos de venta
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							Términos de uso
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							Política de privacidad de NEW STYLE
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							Tus selecciones de privacidad
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							EC. Supply Chains Act
						</a>
					</li>
				</ul>

				<div>
					<p className='flex items-center gap-1 my-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
							/>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
							/>
						</svg>
						<strong className='text-base'>QUITO - ECUADOR</strong>
					</p>
					<p className='text-xs text-slate-400'>
						© 2024 NEW STYLE, Inc. Todos los derechos reservados
					</p>
				</div>

				<p className='my-16 text-4xl tracking-widest text-center font-abrilFatface'>
					LUXE JEFF'S
				</p>
			</footer>
		</>
	);
}

export default App;
