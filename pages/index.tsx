import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from '../components/home/HomeLayout';
import LoginButton from '../components/home/LoginButton';
import EmailForm from '../components/home/EmailForm';
import Image from 'next/future/image';
import SignInUp from '../components/home/SignUpButton';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Disney+ Clone</title>
				<meta name='disney plus clone' content='disney plus clone' />
				<link rel='icon' href='./favicon.ico' />
			</Head>

			<HomeLayout>
				<LoginButton />
				<EmailForm />
			</HomeLayout>
			<section className='bg-[#040714] p-8 flex flex-col items-center'>
				<div>
					<Image
						src='/assets/all-devices.png'
						width={1920}
						height={1080}
						alt='all devices'
						className='w-full h-auto max-w-3xl min-w-[350px]'
					/>
					<div className='min-w-[250px] md:px-4 flex flex-col items-center'>
						<h2 className='text-xl lg:text-3xl md:text-2xl font-bold text-white py-4'>
							Watch the way you want
						</h2>
						<ul className='list-disc w-full px-6 lg:px-10 text-lg lg:text-2xl md:text-xl font-light'>
							<li className='pb-4'>
								Host virtual movie nights with GroupWatch. Pause, rewind and react
								with up to six personal friends. To invite or be invited to join
								GroupWatch, subscription is required
							</li>
							<li className='pb-4'>
								Download any movie or series and watch on-the-go
							</li>
							<li className='pb-4'>
								Keep your family safe with easy parental controls
							</li>
							<li className='pb-4'>
								An ever-growing range of titles in stunning 4K UHD and Dolby Atmos
								sound on compatible devices
							</li>
							<li className='pb-4'>
								Stream on up to four devices at the same time
							</li>
						</ul>
					</div>
				</div>
				<SignInUp />
			</section>
		</div>
	);
};

export default Home;
