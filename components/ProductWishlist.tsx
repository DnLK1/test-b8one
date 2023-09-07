import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Product } from '../data/products';
import { addToWishlist, removeFromWishlist } from '../slices/wishlistSlice';
import { FiHeart } from 'react-icons/fi';
import '../styles/productWishlist.css';

interface ProductWishlistProps {
    product: Product;
}

const ProductWishlist: React.FC<ProductWishlistProps> = ({ product }) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const isAddedToWishlist = wishlistItems.includes(product.id)

    const handleWishlist = () => {
        if (isAddedToWishlist) {
            dispatch(removeFromWishlist(product.id))
        } else {
            dispatch(addToWishlist(product.id))
        }
    };

    return (
        <div
            onClick={handleWishlist}
            className={`flex items-center justify-center rounded-full h-12 w-12 cursor-pointer transition-all duration-100 ${
                isAddedToWishlist ? 'bg-red-500 hover:bg-red-600' : 'iconBg bg-gray-100 hover:bg-red-200'
            } `}
        >
            <FiHeart size={24} fill={isAddedToWishlist ? 'white' : 'transparent'} stroke={isAddedToWishlist ? 'white' : 'black'} className="heart-icon"/>
        </div>
    );
};

export default ProductWishlist;
