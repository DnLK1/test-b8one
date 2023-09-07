import React from 'react';
import { Product } from '../data/products';
import Image from 'next/image';
import ProductWishlist from './ProductWishlist';
import ProductButton from './ProductButtons';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

    const paymentParcels = product.discountedPrice / product.paymentParcels

    return (
        <div className="space-y-4 max-w-128 min-h-128 flex flex-col items-center justify-between font-inter text-gray-400 bg-white rounded-md font-normal border p-4">
            <div className="relative w-5/6">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={240}
                    height={240}
                />
                <div className="flex flex-col items-center justify-center absolute top-0 right-0">
                    <ProductWishlist product={product} />
                </div>
            </div>
            <h2 className="text-base font-semibold text-gray-900 w-5/6">{product.title}</h2>
            <div className="w-5/6">
                <p className="text-sm line-through">R$ {product.price}</p>
                <p className="text-xl font-semibold text-red-600">R$ {product.discountedPrice.toFixed(2)}</p>
                <p className="text-xs">em até <strong className="text-gray-900">{product.paymentParcels}x de R$ {paymentParcels.toFixed(2)}</strong> sem juros</p>
            </div>
                <ProductButton product={product} />
        </div>
    );
};

export default ProductItem;
