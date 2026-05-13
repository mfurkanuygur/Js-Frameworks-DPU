import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([])
 

  useEffect(() => {
    async function getData (){
      const response =await fetch ("http://localhost:3000/products")
      const data=await response.json()
      setProducts(data)
    }
    getData()

   }, [])
  return (
    <>
  {
    products.map(p=>(
      <p>{p.title}</p>

    ))
  }

      {/* Koşullu render */}
      {empty ? <div>sepet boş</div> : <div>sepetteki ürün sayısı {count}</div>}
      <button className={`${empty ? "bg-red-500" : "bg-blue-500"} `}>ekle</button>
    </>
  )
}

export default App
