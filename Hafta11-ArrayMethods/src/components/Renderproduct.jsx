import React from 'react'

export const Renderproduct = ({oneProduct}) => {
    return (
        <>
            <img src={oneProduct?.image} alt={oneProduct?.title} width={300} height={300} className='md:group-hover:scale-105 rounded-2xl transition-all' />
            <div className='p-2'>
                <div>
                    <p className='font-extrabold font-sans md:text-lg line-clamp-2 md:line-clamp-1' title={oneProduct?.title}>{oneProduct?.title}</p>
                    <div className='flex items-center  justify-between'>
                        <p className='font-bold md:text-sm text-blue-900'>{oneProduct?.category}</p>
                        <p className='font-bold md:text-xl text-blue-900 italic'>{oneProduct?.price} ₺</p>
                    </div>
                </div>
                <div className='flex mt-3 gap-1 md:gap-3 justify-between items-center w-full  flex-col md:flex-row'>
                    {/* <button
                        type="button"
                        onClick={(e) => { removeFromCart(e, oneProduct?.id) }}
                        className='cursor-pointer w-full  py-1 rounded-xl text-slate-100 text-sm border border-blue-900 bg-blue-900 hover:bg-white hover:text-blue-900 transition-all capitalize'
                    >
                        Sil
                    </button> */}

                </div>
            </div>
        </>
    )
}
