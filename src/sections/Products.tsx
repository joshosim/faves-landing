import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

function Products() {

    const productRef = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState('Confectioneries/fresh food'.toLocaleLowerCase().replace('-', ''))

    const handleClick = (item: string) => {
        setSelected(item.toLocaleLowerCase().replace('-', ''))
    }

    const Categories: string[] = [
        "Confectioneries/fresh food",
        "Graphics Design",
        "Web design",
        "Video Editing",
        "Event Planning/Giftings",
        "Art Work (Portraits)",
        "Nighties and Undies",
        "Beddings and Duvets",
        "Model",
        "Health and beauty stuffs",
        "Perfumes",
        "Jewelries",
        "Shirts, Trousers and Hoodies",
        "Bags (female and Male)",
        "Foot wears",
        "Phones, Laptops and Powerbanks",
        "HouseHold Utensils"
    ];

    return (
        <section
            id="products"
            ref={productRef}
            className='scroll-mt-32'
        >
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Our Products</div>
                    </div>
                    <h2 className="section-title mt-5">
                        Boost your confidence with out products
                    </h2>
                </div>
                <div className='flex gap-4 items-center justify-center flex-wrap mt-12'>
                    {Categories.map((item, index) => (
                        <div key={index}>
                            <div
                                className={twMerge('bg-transparent px-5 py-2 border border-black rounded-lg cursor-pointer',
                                    selected === item.toLocaleLowerCase().replace('-', '') && 'bg-black')}

                                onClick={() => handleClick(item)}>
                                <p className={twMerge('text-sm md:text-base whitespace-nowrap text-black',
                                    selected === item.toLocaleLowerCase().replace('-', '') && 'text-white')}>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
