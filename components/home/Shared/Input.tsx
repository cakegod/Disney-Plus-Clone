

interface Props {
	placeholder: string;
}

function Input({ placeholder }: Props) {
	return (
		<input
			placeholder={placeholder}
			type='email'
			className='lg:max-w-80 w-full h-14 bg-gray-700 rounded-l z-10 focus:border focus:border-gray-500 outline-0 px-4'
		/>
	);
}

export default Input;
