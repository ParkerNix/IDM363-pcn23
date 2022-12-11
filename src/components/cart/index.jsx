import CartItem from "../cart_item"
import { useSelector } from 'react-redux';

export const Cart = () => {
    const cart = useSelector((state) => state.cart_slicey.value);

    return (
        <>
            <div className='container'>
                <div>
                    {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price} 
                    />
                    ))}
                </div>
            </div>
        </>
    )
}