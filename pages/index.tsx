import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from '../components/home/HomeLayout';
import LoginButton from '../components/home/LoginButton';
import EmailForm from '../components/home/EmailForm';

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
		</div>
	);
};

export default Home;
