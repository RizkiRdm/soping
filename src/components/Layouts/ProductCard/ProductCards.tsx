import React from 'react'
import ProductCard from '@/components/Fragments/ProductCard/ProductCard';

interface Product {
    _id: number
    images: any
    title: string
    category: string
    price: number
}

interface ProductDataProps {
    product: Product
}


const ProductCards: React.FC<ProductDataProps> = ({ product }) => {
    return (
        <>

            <ProductCard
                _id={product._id}
                categoryTitle={product.category}
                title={product.title}
                images={product.images}
                price={product.price}
            />
        </>
    )
}

export default ProductCards