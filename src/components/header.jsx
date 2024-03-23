export function Header() {
	const textDecoration = "hover:text-pink-400 font-semibold transition-colors duration-800"
	return(
		<>
			<div className="w-full flex p-4 m-4 justify-end space-x-3.5">
				<a href="#" className={textDecoration}>Início</a>
				<a href="#" className={textDecoration}>Sobre</a>
				<a href="#" className={textDecoration}>Cards</a>
			</div>
		</>
	)
}