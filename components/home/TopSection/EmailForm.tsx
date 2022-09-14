import Image from 'next/future/image';
import SignInUp from '../Shared/SignUpButton';

export default function EmailForm() {
	return (
		<>
		<div className=' flex flex-col gap-4 items-center max-w-xl lg:text-xl lg:items-start lg:px-0 pt-60 text-center lg:text-left'>
			<Image src='/assets/logo.svg' width={180} height={97} alt='disney logo' />
			<h1 className='text-white z-10 text-2xl lg:text-4xl font-medium tracking-wide'>
				+ More than you&apos;d ever imagine
			</h1>
			<p>Enter your email to create or restart your subscription.</p>

			<form
				action=''
				className='flex flex-col items-center lg:flex-row lg:h-14 gap-2 lg:gap-0 w-full'>
				<input
					placeholder='Email'
					type='email'
					className='lg:max-w-80 w-full h-14 bg-gray-800 rounded-l z-10 focus:border focus:border-gray-500 outline-0 px-2 max-w-xs'
				/>
				<SignInUp extraStyles="lg:rounded-none lg:rounded-r" />
			</form>
			<p>
				Get 12 months for the price of 10 when you sign up for an annual Disney+
				subscription, compared to paying monthly.
			</p>
		</div>
			</>
	);
}
