import Link from 'next/link';

export default function LoginButton() {
	return (
		<button className='fixed right-10 top-3 h-12 w-20 rounded-md border border-white bg-black/90 text-lg uppercase tracking-wide transition-all hover:bg-white hover:text-black hover:transition-all lg:h-14 lg:w-28 lg:text-xl'>
			<Link href='/login'>Log in</Link>
		</button>
	);
}
