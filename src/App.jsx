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

	return (
		<>
			<header className='shadow'>
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
								className='text-xl font-bold'>
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

			<article className='p-4 text-justify'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est laudantium
				quo explicabo ullam. Nesciunt excepturi velit eum iure enim hic quisquam dolores
				alias ipsa, facere voluptatem a dolore laboriosam! Ex eos aliquid quisquam minus
				fuga corporis temporibus accusantium qui saepe nihil pariatur, officia alias
				sequi, aspernatur laudantium sunt optio. Sed, eaque quibusdam nostrum explicabo
				commodi dolores doloribus tempora laborum. Earum reprehenderit praesentium quia
				magnam doloribus aperiam voluptatum alias aliquid molestiae in aliquam molestias
				dolorem, ipsam dignissimos! Excepturi, aspernatur nostrum iste itaque tempore
				perferendis dignissimos beatae ad commodi, iusto nesciunt.
			</article>

			<h3 className='p-2 mt-8 text-xl font-bold'>TENDENCIAS</h3>
			<div className='flex gap-1 pb-4 mx-2 overflow-x-auto flex-nowrap'>
				{trendClothes.map((item) => {
					return (
						<article
							key={item.id}
							className='relative flex-shrink-0 w-1/2 flex-grow-1 flex-basis-auto sm:w-1/3 md:w-1/4 lg:w-1/5'>
							<img
								src={item.img}
								alt={item.name}
								className='w-full'
							/>
							<h3>{item.name}</h3>
							<p>
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

			<aside className='p-10 my-20'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda consequatur
				ducimus ex aperiam facilis corrupti similique veniam. Esse aspernatur reiciendis
				aut doloremque, non maiores illum est ea tenetur necessitatibus rerum? Aut
				asperiores id atque inventore corrupti. Accusamus ex quas eius? Suscipit ratione
				accusantium consequatur labore aperiam possimus, corrupti error odit incidunt
				itaque. Ea odit ab maxime eius dolor vitae delectus! Sit quae a et at numquam rem
				odio quis consequuntur quasi laudantium magnam sequi perspiciatis fugiat, aliquid
				vel nobis similique, fugit nulla. Odit voluptas atque provident autem laudantium
				error incidunt? Voluptatibus ipsum eos commodi exercitationem quia ipsa dolorem
				minus? Sapiente officiis temporibus, numquam tenetur consequatur nihil incidunt
				deserunt omnis minus sint id ut hic dolorum illo animi. Recusandae, architecto
				suscipit.
			</aside>

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

				<ul className='flex justify-between gap-2 sm:flex-col'>
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

				<ul className='flex justify-between gap-2 sm:flex-col sm:justify-start'>
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

				<ul className='flex justify-between gap-2 sm:flex-col'>
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
			</footer>
		</>
	);
}

export default App;
