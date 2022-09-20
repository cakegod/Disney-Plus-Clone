interface Props {
	extraStyles: string | null;
	text: string;
}

export default function SignInUp({ extraStyles, text }: Props) {
	return (
		<button
			className={
				'h-14 w-full max-w-sm rounded bg-blue-600 text-lg uppercase tracking-wider text-white transition-all hover:bg-blue-500 hover:transition-all lg:text-xl ' +
				extraStyles
			}>
			{text}
		</button>
	);
}
