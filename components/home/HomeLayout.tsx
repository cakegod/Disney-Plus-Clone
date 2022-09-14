interface Props {
	children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
	return <main className='h-full min-h-screen'>{children}</main>;
}
