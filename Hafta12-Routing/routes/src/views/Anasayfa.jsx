import React, { useState } from 'react'

export const Anasayfa = () => {
    const [empty,setEmpty]=useState(true)
    const additem=()=>{
        setEmpty(!empty)
    }
    return (
        <div>Anasayfa
            {empty && <div>sepet boş</div> || <div>sepetteki ürün sayısı 1</div>}
            <button onClick={additem} className={`${empty ? "bg-red-500" : "bg-blue-500"} `}>ekle</button>
        </div>
    )
}
