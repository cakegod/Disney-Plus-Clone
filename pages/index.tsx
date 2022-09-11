import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/future/image';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Disney+ Clone</title>
				<meta name='disney plus clone' content='disney plus clone' />
				<link rel='icon' href='./favicon.ico' />
			</Head>

			<main className='h-screen '>
				<div className='lg:bg-[url("../public/assets/pc-background.jpeg")] bg-[url("../public/assets/mobile-background.jpeg")] bg-cover bg-[position:50%] h-full absolute z-0 top-0 bottom-0 right-0 left-0 lg:px-16 px-8 py-6 flex justify-center lg:justify-start'>
					<button className='uppercase border border-white hover:bg-white hover:text-black transition-all hover:transition-all bg-black/90 w-20 h-12 lg:w-28 lg:h-12 text-lg lg:text-xl tracking-wide rounded-md right-8 fixed'>
						Log in
					</button>
					<div className='fixed flex flex-col gap-4 items-center max-w-lg lg:text-xl lg:items-start px-8 lg:px-0 pt-40 text-center lg:text-left'>
						<Image
							src='/assets/logo.svg'
							width={180}
							height={97}
							alt='disney logo'
						/>
						<h1 className='text-white z-10 text-2xl lg:text-4xl font-medium tracking-wide'>
							+ More than you'd ever imagine
						</h1>
						<p>Enter your email to create or restart your subscription.</p>

						<form
							action=''
							className='flex flex-col lg:flex-row lg:h-14 gap-2 lg:gap-0  w-full'>
							<input
								placeholder='Email'
								type='email'
								className='lg:w-80 h-14 bg-gray-800 rounded-l z-10 focus:border focus:border-gray-500 outline-0 px-2 '
							/>
							<button className='lg:w-56 h-14 bg-blue-600 hover:bg-blue-500 transition-all hover:transition-all rounded-r uppercase tracking-wider text-white text-lg lg:text-xl'>
								Continue
							</button>
						</form>
						<p>
							Get 12 months for the price of 10 when you sign up for an annual
							Disney+ subscription, compared to paying monthly.
						</p>
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
