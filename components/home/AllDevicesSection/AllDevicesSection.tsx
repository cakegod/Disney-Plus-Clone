import Image from 'next/future/image';
import { forwardRef } from 'react';
import SignInUp from '../Shared/SignUpButton';

export const AllDevicesSection = forwardRef(function AllDevicesSection(
	props,
	ref,
) {
	return (
		<section
			className='bg-[#040714] p-8 flex flex-col items-center justify-center min-h-screen'
			ref={ref}>
			<div className='flex flex-col lg:flex-row items-center'>
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
	);
});
