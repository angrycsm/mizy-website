import './output.css';
import Logo from '/public/sakura.png';
import Dracu from '/public/dracu.png';
import { Header } from '/src/components/header.jsx';
import { TextInitial } from '/src/components/text-initial.jsx';
import { Card } from '/src/components/card.jsx';

export default function App() {
  const textDecoration = "bg-gradient-to-r from-pink-700 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm font-bold";

  return (
    <div className="overflow-x-hidden">
      <div className="w-full h-14 bg-white rounded-b-3xl fixed z-20">
        <div className="flex items-center pl-3.5 h-16">
          <div>
            <img src={Logo} className="w-10 h-10 mr-1.5 mb-2"/>
          </div>
          <div>
            <h3 className="font-bold text-lg bg-gradient-to-r from-pink-600 to-pink-400 inline-block text-transparent bg-clip-text mb-2">MIZY</h3>
          </div>
          <Header/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-auto h-auto">
        <div>
          <h1 className="text-center text-4xl pt-24 font-bold bg-gradient-to-r from-pink-700 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">Welcome Milly</h1>
          <TextInitial/>
          <button className="w-32 h-9 bg-pink-400 mx-36 font-bold text-base rounded-xl text-slate-50 hover:bg-pink-500 hover:w-34 hover:h-10 drop-shadow-md transition-colors delay-500 duration-800 cursor-pointer ">Saiba Mais</button>
          <div className="flex justify-center items-center mt-4 pt-24 w-full">
            <img src={Dracu} className="w-28 h-auto mr-18 drop-shadow-md"/>
            <div className="w-48 h-24 mr-12 bg-gradient-to-tr from-white from-60% to-slate-300 rounded-md drop-shadow-md z-10">
              <p className="text-center text-xs font-medium p-4">Siga abaixo para explorar vários <span className={textDecoration}>filmes</span>, <span className={textDecoration}>séries</span> e <span className={textDecoration}>desenhos</span> que você gosta!</p>
            </div>
          </div>
				  <div className="flex justify-end w-full h-auto ">
	          <div className="w-48 h-24 mr-12 bg-gradient-to-tr from-white from-60% to-slate-300 rounded-md drop-shadow-md z-10">
	            
	          </div>
					</div>
        </div>
      </div>
      <div id="Card">
        <div className="max-w-full h-screen bg-gradient-to-b from-pink-500 to-pink-800 mt-8">
          <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-pink-300 via-fuchsia-200 to-pink-300 text-transparent bg-clip-text drop-shadow-md pt-12">Cards</h1>
          <div className="w-full flex flex-col items-center justify-center pt-4 ">
            <Card title="Filmes" text="Aaaaaaaaaaaaaaaaaaaaaa" textButton="Assistir Filme"/>
          </div>
        </div>
      </div>
    </div>
  );
}