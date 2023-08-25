import { useRef, useState } from 'react'
import './App.css'
import {v4} from 'uuid'


function App() {

    const [produtos, setProdutos] = useState([])
    const inputRef = useRef()

    function adicionar() {

      setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])
    
  }

  return (
      <div>
      <h1>Lista de Produtos</h1>
      <input placeholder='produtos' ref={inputRef}/>
      <button onClick={adicionar}>adicionar</button>
    
      {
        produtos.map(produto => (
          <div key={produto.id}>{produto.nome}</div>
       )) 
       
      }

      </div>
  )
}

export default App
