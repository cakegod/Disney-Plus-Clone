import Image from 'next/future/image';
import { ForwardedRef, forwardRef } from 'react';
import SignInUp from '../Shared/SignUpButton';

export const AllDevicesSection = forwardRef(function AllDevicesSection(
	props,
	ref: ForwardedRef<HTMLElement>,
) {
	return (
		<section
			className='flex min-h-screen flex-col items-center justify-center bg-[#040714] p-8'
			ref={ref}>
			<div className='flex flex-col items-center lg:flex-row'>
				<Image
					src='/assets/all-devices.png'
					width={1920}
					height={1080}
					alt='all devices'
					className='h-auto w-full min-w-[350px] max-w-3xl'
				/>
				<div className='flex min-w-[250px] flex-col items-center md:px-4'>
					<h2 className='py-4 text-xl font-bold text-white md:text-2xl lg:text-4xl'>
						Watch the way you want
					</h2>
					<ul className='w-full list-disc px-6 text-lg font-light md:text-xl lg:px-10 lg:text-2xl'>
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
			<SignInUp extraStyles='my-16' text='Sign in up' />
		</section>
	);
});
