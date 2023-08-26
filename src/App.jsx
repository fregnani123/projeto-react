import { useRef, useState } from 'react'
import './App.css'
import { v4 } from 'uuid'
import purchaseImage from  '../public/image/compras.png'

function Home() {

    const [produtos, setProdutos] = useState([])
    const inputRef = useRef()

  function inputVazio() {
    return !inputRef.current.value.trim();
  }

  function limparInput() {
    inputRef.current.value = "";
   }
  
  function adicionar() {
    if (!inputVazio()) {
      setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
      limparInput();
    }
  }
  
  function deletaProduto(id) {
      setProdutos(produtos.filter(produto => produto.id !== id))
   }
  
  return (
    <body>
      <img className='purchaseImage' src={purchaseImage}/>
     <div className='container'>
      <h1>Lista de compras </h1>
      <input placeholder='produtos' ref={inputRef}/>
        <button onClick={adicionar}>🛒 adicionar</button>
    
      {
        produtos.map(produto => (
          <div key={produto.id}><p className='nomeProduto'>{produto.nome}<button className='bin' onClick={()=> deletaProduto(produto.id)}>🗑️</button ></p></div>
          
       ))     
          
      }
      </div>
    </body>
  )
}

export default Home
