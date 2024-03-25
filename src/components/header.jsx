export function Header() {
	const textDecoration = "hover:text-pink-400 font-semibold transition-colors delay-500 duration-800"
	return(
		<>
			<div className="w-full flex p-4 mr-3.5 mb-2.5 justify-end items-center space-x-3.5">
				<a href="#" className={textDecoration}>Início</a>
				<a href="#" className={textDecoration}>Sobre</a>
				<a href="#Card" className={textDecoration}>Cards</a>
			</div>
		</>
	)
}