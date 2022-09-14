interface Props {
	children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
	return (
		<main className='h-screen '>
			<div className='lg:bg-[url("../public/assets/pc-background.jpeg")] bg-[url("../public/assets/mobile-background.jpeg")] bg-cover bg-[position:50%] h-full absolute z-0 top-0 bottom-0 right-0 left-0 lg:px-16 px-8 py-6 flex justify-center lg:justify-start'>
				{children}
			</div>
		</main>
	);
}
