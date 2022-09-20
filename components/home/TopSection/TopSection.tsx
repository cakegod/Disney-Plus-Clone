import EmailForm from './EmailForm';
import LoginButton from './LoginButton';
import ScrollButton from './ScrollButton';

interface Props {
	handleScroll: () => void;
}

export default function TopSection({ handleScroll }: Props) {
	return (
		<section className='top-0 bottom-0 right-0 left-0 z-0 mb-[-3px] flex min-h-screen justify-center bg-[url("../public/assets/mobile-background.jpeg")] bg-cover bg-[position:50%] px-8 py-6 lg:justify-start lg:bg-[url("../public/assets/pc-background.jpeg")] lg:px-16'>
			<LoginButton />
			<EmailForm />
			<ScrollButton handleScroll={handleScroll} />
		</section>
	);
}
