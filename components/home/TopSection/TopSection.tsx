import EmailForm from './EmailForm';
import LoginButton from './LoginButton';
import ScrollButton from './ScrollButton';

interface Props {
	handleScroll: () => void;
}

export default function TopSection({ handleScroll }: Props) {
	return (
		<section className='lg:bg-[url("../public/assets/pc-background.jpeg")] bg-[url("../public/assets/mobile-background.jpeg")] bg-cover bg-[position:50%] h-screen z-0 top-0 bottom-0 right-0 left-0 lg:px-16 px-8 py-6 flex justify-center lg:justify-start mb-[-3px]'>
			<LoginButton />
			<EmailForm />
			<ScrollButton handleScroll={handleScroll} />
		</section>
	);
}
