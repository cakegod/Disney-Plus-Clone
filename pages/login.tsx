import Image from 'next/future/image';
import React from 'react';
import Input from '../components/home/Shared/Input';
import SignInUp from '../components/home/Shared/SignUpButton';

function Login() {
	return (
		<div className='bg-[#1A1D29] w-full h-screen flex justify-center pt-20'>
			<div className='max-w-sm w-full'>
				<Image
					src='/assets/logo.svg'
					width={180}
					height={97}
					alt='disney logo'
          className='m-auto'
				/>
				<h2 className='text-2xl font-bold py-8 text-white text-start'>
					Log in with your email
				</h2>
				<form action='' className='flex flex-col w-full gap-8 '>
					<Input placeholder='Email address' />
					<SignInUp extraStyles={null} text='Continue' />
				</form>
			</div>
		</div>
	);
}

export default Login;
