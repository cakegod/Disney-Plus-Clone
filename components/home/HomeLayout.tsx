interface Props {
	children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
	return <main className='h-screen'>{children}</main>;
}
