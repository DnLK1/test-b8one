import React from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { Product } from '../data/products';
import Button from '@mui/material/Button';
import { FaCheck } from 'react-icons/fa';

interface ProductButtonsProps {
    product: Product;
}

const ProductButton: React.FC<ProductButtonsProps> = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const isAddedToCart = cartItems.includes(product.id);

    const handleCart = () => {
        if (isAddedToCart) {
            dispatch(removeFromCart(product.id));
        } else {
            dispatch(addToCart(product.id));
        }
    };

    return (
        <div className='w-5/6'>
            <Button
                disableElevation
                onClick={handleCart}
                size="large"
                variant="contained"
                color={isAddedToCart ? 'secondary' : 'primary'}
                sx={{ ":hover": { bgcolor: isAddedToCart ? '#78CF8E' : '#1E9631' } }}
                style={{ fontSize: '16px', fontWeight: '700', width: '100%' }}
            >
                {isAddedToCart && <FaCheck style={{ marginRight: '8px' }} />}
                {isAddedToCart ? 'Adicionado' : 'Adicionar'}
            </Button>
        </div>
    );
};

export default ProductButton;
