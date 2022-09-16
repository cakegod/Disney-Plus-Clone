import Link from 'next/link';

export default function LoginButton() {
	return (
		<button className='uppercase border border-white hover:bg-white hover:text-black transition-all hover:transition-all bg-black/90 w-20 h-12 lg:w-28 lg:h-14 text-lg lg:text-xl tracking-wide rounded-md right-10 top-3 fixed'>
			<Link href='/login'>Log in</Link>
		</button>
	);
}
