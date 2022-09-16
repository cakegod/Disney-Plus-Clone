import Image from 'next/future/image';
import Input from '../Shared/Input';
import SignInUp from '../Shared/SignUpButton';

export default function EmailForm() {
	return (
		<>
			<div className=' flex flex-col gap-4 items-center lg:max-w-xl lg:text-xl lg:items-start lg:px-0 pt-60 text-center lg:text-left max-w-sm'>
				<Image
					src='/assets/logo.svg'
					width={180}
					height={97}
					alt='disney logo'
				/>
				<h1 className='text-white z-10 text-2xl lg:text-4xl font-medium tracking-wide'>
					+ More than you&apos;d ever imagine
				</h1>
				<p>Enter your email to create or restart your subscription.</p>

				<form
					action=''
					className='flex flex-col items-center lg:flex-row lg:h-14 gap-2 lg:gap-0 w-full '>
					<Input placeholder="Email Address" />
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
