import CartItem from "../cart_item"
import { useSelector } from 'react-redux';

export const Cart = () => {
    const cart = useSelector((state) => state.cart_slicey.value);

    return (
        <>
            <h2 className="h1">Cart</h2>
            <div>
                {cart.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price} 
                />
                ))}
                <p>Add more, we dare you!</p>
            </div>
        </>
    )
}