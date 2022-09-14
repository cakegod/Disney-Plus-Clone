import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import { AllDevicesSection } from '../components/home/AllDevicesSection/AllDevicesSection';
import HomeLayout from '../components/home/HomeLayout';
import TopSection from '../components/home/TopSection/TopSection';

const Home: NextPage = () => {
	const scroll = useRef<HTMLElement>(null);

	const handleScroll = () => {
		if (scroll.current !== null) {
			scroll.current.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center',
			});
		}
	};

	return (
		<>
			<Head>
				<title>Disney+ Clone</title>
				<meta name='disney plus clone' content='disney plus clone' />
				<link rel='icon' href='./favicon.ico' />
			</Head>

			<HomeLayout>
				<TopSection handleScroll={handleScroll} />
				<AllDevicesSection ref={scroll} />
			</HomeLayout>
		</>
	);
};

export default Home;
