interface Props {
	extraStyles: string | null;
	text: string;
}

export default function SignInUp({ extraStyles, text }: Props) {
	return (
		<button
			className={
				'h-14 bg-blue-600 hover:bg-blue-500 transition-all hover:transition-all uppercase tracking-wider text-white text-lg lg:text-xl w-full rounded max-w-sm ' +
				extraStyles
			}>
			{text}
		</button>
	);
}
