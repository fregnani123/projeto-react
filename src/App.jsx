import { useRef, useState } from 'react'
import './App.css'
import { v4 } from 'uuid'
import purchaseImage from  '../public/image/compras.png'

function Home() {

    const [produtos, setProdutos] = useState([])
    const inputRef = useRef()

    function adicionar() {

      setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]) 
    }
  
  function deletaProduto(id) {
      setProdutos(produtos.filter(produto => produto.id !== id))
   }
  
  return (
     <div>
     
      <h1>Lista de compras </h1>
      <input placeholder='produtos' ref={inputRef}/>
      <button onClick={adicionar}>adicionar</button>
    
      {
        produtos.map(produto => (
          <div key={produto.id}><p>{produto.nome}<button className='lixeira' onClick={()=> deletaProduto(produto.id)}>🗑️</button ></p></div>
          
       ))     
          
      }

      
    </div>
  )
}

export default Home
