import { useEffect, useState } from 'react'

import './App.css'
import { Renderproduct } from './components/Renderproduct'

function App() {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])


  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/products")
      const data = await response.json()
      setProducts(data)
      setAllProducts(data)
    }
    getData()

  }, [])


  //Dizi metotları

  const tümÜrünler = () => {
    setProducts(allProducts)
  }

  // map metodu
  // Var olan diziyi değiştirmez. Yeni bir dizi oluşturur.

  // const hoodie= products.map(p=>p.title=="Classic Heather Gray Hoodie 12")
  // console.log("hoodie",hoodie)

  // const mappa = products.map(p => p.price * 2)
  // console.log("zamlanmış ürünler", mappa)
  // console.log("orjinal ürünler", products.map(p => Number(p.price)))


  // filter metodu
  // Şartı sağlayan verileri dizi olarak dönderir.
  const beşYüzdenBüyükler = () => {
    const pahalılar = products.filter(p => p.price > 500)
    console.log("fiyatı 500 ₺ 'den büyükler", pahalılar)
    setProducts(pahalılar)
  }

  // includes metodu
  const metin = "merhaba"
  const varMı = metin.includes("a")
  console.log(varMı)

  const ürünArama = (e) => {
    // console.log(e)
    if (e.target.value.trim() === "") {
      setProducts(allProducts)
    }
    else {
      const arama = allProducts.filter(
        p => p.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setProducts(arama)
    }
  }

  // find metodu
  // Tek eleman bulmak için kullanılır. Eşleşen ilk elemanı döner.
  // Dizi dönmez. Object döner
  // Genellikle id ile ilgili aramalarda kullanılır  

  const ürünID = (e) => {
    if (e.target.value.trim() === "") {
      setProducts(allProducts)
    }
    else {
      const arama = allProducts.find(p => p.pid === e.target.value)
      console.log(arama)
      setProducts([arama])
    }
  }

  return (
    <>
      <div className='flex w-full justify-center items-center gap-5 my-3'>
        <button onClick={tümÜrünler} className='px-5 py-3 bg-red-500 cursor-pointer border-2 rounded-2xl'>Tüm ürünler</button>
        <button onClick={beşYüzdenBüyükler} className='px-5 py-3 bg-red-500 cursor-pointer border-2 rounded-2xl'>500Den pahalılar</button>
        <input type="text" onChange={(e) => ürünArama(e)} placeholder='ürün ara' className='py-3 px-5 border-2 outline-none' />
        <input type="text" onChange={(e) => ürünID(e)} placeholder='ürün id gir' className='py-3 px-5 border-2 outline-none' />

      </div>
      <div className='max-w-7xl mx-auto py-7 px-4 md:px-0'>

        <div className='grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-4  '>

          {products.map(p => (
            <Renderproduct oneProduct={p} key={p.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
