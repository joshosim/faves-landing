import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { supabase } from '../supabase.ts'

function Products() {

    const productRef = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState('tees')
    const [images, setImages] = useState<string[]>([]);

    const handleClick = (item: string) => {
        setSelected(item.toLocaleLowerCase().replace('-', ''))
    }

    const Categories = [
        'Tees', 'TShirt', 'Plain Trouser', 'Jeans',
        'Unisex', 'Pam', 'Sneakers',
        'Luxury Shoes', 'Male Shorts', 'Hoddy', 'Necklace', 'Cap', 'EarRings'
    ]

    useEffect(() => {
        const fetchImages = async () => {
            try {

                const { data, error } = await supabase
                    .storage
                    .from('photos')
                    .list(selected, {
                        limit: 100,
                        offset: 0,
                        sortBy: { column: 'name', order: 'asc' }
                    })

                if (error) {
                    throw error;

                }

                console.log('data from the storage', data)

                if (data) {
                    //get public url for all data
                    const imageUrls = data.map((file) => {
                        const { data: files } = supabase
                            .storage
                            .from('photos')
                            .getPublicUrl(`${selected}/${file.name}`)
                        return files.publicUrl;

                    })

                    setImages(imageUrls)
                }



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
                                    selected === item.toLocaleLowerCase().replace('-', '') && 'bg-black')}

                                onClick={() => handleClick(item)}>
                                <p className={twMerge('text-sm md:text-base whitespace-nowrap text-black',
                                    selected === item.toLocaleLowerCase().replace('-', '') && 'text-white')}>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    images.length > 0 ?
                        (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12 h-[400px] overflow-y-scroll hide-scrollbar'>
                            {images

                                .map((item, index) => {

                                    return (
                                        <img
                                            key={index}
                                            src={item}
                                            alt={item}
                                            width={400}
                                            height={300}
                                            className='h-[300px] w-[400px] object-cover rounded-lg' />
                                    )
                                })}
                        </div>) : (
                            <div className='grid gap-4 my-12 h-[400px] overflow-y-scroll hide-scrollbar'>
                                <p className='flex items-center justify-center'>No Images Available for {selected}</p>
                            </div>
                        )}

            </div>
        </section>
    )
}

export default Products
