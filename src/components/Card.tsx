import Image from 'next/image'
import React from 'react'

export default function Card({ index, product }: { index: number, product: any }) {

    return (
        <div className={`bg-black-overlay/40 gap-1 rounded-lg flex flex-col justify-between shadow-sm shadow-black-overlay p-1 pb-2 w-[230px] h-[350px]`}>
            <Image src={`/images/cards/${index + 1}.png`} alt={`${product.title}`} width={230} height={100} className='rounded-lg' />
            <h1 className='w-full text-white text-start'>{product.title}</h1>
            <button className='bg-light-blue text-black font-aloevera-light w-fit py-1 px-4 self-end rounded-lg'>Shop</button>
        </div>
    )
}
