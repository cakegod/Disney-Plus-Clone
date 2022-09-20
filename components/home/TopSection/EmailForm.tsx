import Image from 'next/future/image';
import Input from '../Shared/Input';
import SignInUp from '../Shared/SignUpButton';

export default function EmailForm() {
	return (
		<>
			<div className=' flex max-w-sm flex-col items-center gap-4 pt-60 text-center lg:max-w-xl lg:items-start lg:px-0 lg:text-left lg:text-xl'>
				<Image
					src='/assets/logo.svg'
					width={180}
					height={97}
					alt='disney logo'
				/>
				<h1 className='z-10 text-2xl font-medium tracking-wide text-white lg:text-4xl'>
					+ More than you&apos;d ever imagine
				</h1>
				<p>Enter your email to create or restart your subscription.</p>

				<form
					action=''
					className='flex w-full flex-col items-center gap-2 lg:h-14 lg:flex-row lg:gap-0 '>
					<Input placeholder='Email Address' />
					<SignInUp
						extraStyles='lg:rounded-none lg:rounded-r'
						text='Sign in up'
					/>
				</form>
				<p>
					Get 12 months for the price of 10 when you sign up for an annual
					Disney+ subscription, compared to paying monthly.
				</p>
			</div>
		</>
	);
}
