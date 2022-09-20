import Image from 'next/future/image';
import React from 'react';
import Input from '../components/home/Shared/Input';
import SignInUp from '../components/home/Shared/SignUpButton';

function Login() {
	return (
		<div className='flex h-screen w-full justify-center bg-[#1A1D29] pt-20'>
			<div className='w-full max-w-sm'>
				<Image
					src='/assets/logo.svg'
					width={180}
					height={97}
					alt='disney logo'
					className='m-auto'
				/>
				<h2 className='py-8 text-start text-2xl font-bold text-white'>
					Log in with your email
				</h2>
				<form action='' className='flex w-full flex-col gap-8 '>
					<Input placeholder='Email address' />
					<SignInUp extraStyles={null} text='Continue' />
				</form>
			</div>
		</div>
	);
}

export default Login;
