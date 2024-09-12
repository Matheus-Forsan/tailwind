import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-red-600 p-2">
        <h1 className="text-white font-black text-xl">SenaiNews</h1>
        <nav className="flex gap-5">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-white font-semibold">Sobre</a>
        <a href="#" className="text-white font-semibold">Contato</a>
        </nav>
      </header>
      <main className="mx-6 flex-1">
        <h2 className="mt-4">Principais noticias</h2>
        <div className="flex justify-around flex-wrap  gap-4">
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>Corinthias classificado!</h3>
            <p>Juiz faz a parte dele.</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>Queimadas na regiao de São Paulo</h3>
            <p>fogo.</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>Neymar contradiz falsa contratação pelo Ponte-Preta</h3>
            <p>afirma que possui contratação com vasco.</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>X banido no brasil</h3>
            <p>multa de R$50.000 para quem usar vpn</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>Objetos voadores indentificados</h3>
            <p>Eram Aviões.</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>One Piece 2 é anunciado!</h3>
            <p>Two Piece vira em 2038.</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>Valor do Dolar aumentando</h3>
            <p>como piratear uma casa.</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        <div className="flex flex-col justify-center items-center rounded border-gray-400 border-2 p-2 w-80" >
            <img src="http://via.placeholder.com/300x200" alt=""/>
            <h3>Estou sem ideias!</h3>
            <p>Não tem nada aqui!</p>
            <a className="bg-rose-900 p-2 text-white w-full text-center" href="#">Ver mais</a>
        </div>
        </div>
      </main>
      <footer className="bg-red-600 p2 text-white text-center">
        <h4>Todos os direitos reservados - 2024</h4>
      </footer>
    </div>
  );
}

export default App;
