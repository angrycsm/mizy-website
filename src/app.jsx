import './output.css';
import Logo from '/public/sakura.png'
import { Header } from '/src/components/header.jsx'

export default function App() {
  return (
		<header className="w-full h-16 fixed bg-white rounded-b-3xl">
		<div className="flex items-center pl-3.5 h-16">
			<div>
				<img src={Logo} className="w-10 h-10 mr-1.5"/>
			</div>
			<div>
				<h3 className="font-bold text-lg bg-gradient-to-r from-pink-600 to-pink-400 inline-block text-transparent bg-clip-text">MIZY</h3>
			</div>
			<Header/>
  	</div>
		</header>
			  
  )
}
