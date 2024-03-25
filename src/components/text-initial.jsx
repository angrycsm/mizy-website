export function TextInitial () {
	const textGradient = "bg-gradient-to-r from-pink-700 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm font-bold"
	return(
		<>
			<p className="text-sm text-center p-4 font-medium">
  Bem-vindo ao universo <span className={textGradient}>MIZY</span> online! Nosso site de filmes é um verdadeiro paraíso para os amantes do cinema, onde você pode explorar uma vasta coleção de títulos de todos os gêneros, desde clássicos atemporais até as mais recentes produções de Hollywood. Com uma <span className={textGradient}>interface intuitiva</span> e <span className={textGradient}>amigável</span>, navegar pelo nosso catálogo é uma experiência prazerosa e envolvente.
</p>
		</>
	)
}