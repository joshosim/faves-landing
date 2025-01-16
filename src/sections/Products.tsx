
import { storage } from '../firebase.ts'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'


function Products() {

    const productRef = useRef<HTMLDivElement>(null)

    const [selected, setSelected] = useState('Tees')
    const [images, setImages] = useState<string[]>([]);

    const handleClick = (item: string) => {
        setSelected(item)

    }

    const Categories = [
        'Tees', 'T-Shirt', 'Plain Trouser', 'Jeans',
        'Unisex', 'Pam', 'Sneakers',
        'Luxury Shoes', 'Male Shorts', 'Hoddy', 'Necklace', 'Cap', 'EarRings'
    ]

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const listRef = ref(storage, `${selected}/`);

                const res = await listAll(listRef);


                const imagePromises = res.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    return url
                })


                const imageUrls = await Promise.all(imagePromises)


                setImages(imageUrls)
                console.log(imageUrls, 'req')

            } catch (error) {
                console.error('Error fetching images:', error)
            }
        }

        fetchImages()

    }, [selected])


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
                <div className='flex gap-4 items-center overflow-x-scroll scroll-smooth hide-scrollbar mt-12'>
                    {Categories.map((item, index) => (
                        <div key={index}>
                            <div
                                className={twMerge('bg-transparent px-5 py-2 border border-black rounded-lg cursor-pointer',
                                    selected === item && 'bg-black')}

                                onClick={() => handleClick(item)}>
                                <p className={twMerge('text-sm md:text-base whitespace-nowrap text-black',
                                    selected === item && 'text-white')}>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12 h-[400px] overflow-y-scroll hide-scrollbar'>
                    {images
                        // .filter((item) => item.category === selected)
                        .map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={item}
                                width={400}
                                height={300}
                                className='h-[300px] w-[400px] object-cover rounded-lg' />
                        ))}
                </div>

            </div>
        </section>
    )
}

export default Products
