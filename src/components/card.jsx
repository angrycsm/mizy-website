export function Card({title, text, textButton}) {
	const content = {
		title: title,
    text: text,
    textButton: textButton
	}
  return (
    <>
      <div className="w-56 h-52 mb-8 bg-gradient-to-tr from-white from-60% to-slate-300 rounded-md drop-shadow-md overflow-hidden transition-height duration-400 delay-600 hover:h-96 relative hover:delay-700">
        <h3 className="text-center font-bold pt-8 text-xl text-black">{content. title}</h3>
        <p className="flex flex-col space-x-1.5 text-sm text-center p-4 relative z-10">{content.text}</p>
        <button className="text-sm font-medium text-slate-100 w-28 h-8 rounded-lg bg-pink-300 transition-colors duration-800 delay-150 hover:bg-pink-500 hover:font-bold hover:w-32 hover:h-10 relative bottom-4 left-1/2 transform -translate-x-1/2 overflow-hidden z-10 mt-4">{content.textButton}</button>
      </div>
    </>
  );
}