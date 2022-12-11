import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart";
import { format_price } from "../../funcs/money";

export default function CardItem({id, title, price}){
    const dispatch = useDispatch();

    function removeIt(id){
        dispatch(removeFromCart(id));
    }

    return(
        <div className="card mb-3" key={id}>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{format_price(price)}</p>
                <button className="py-2 px-2" onClick={() => removeIt(id)}>REMOVE FROM CART</button>
            </div>
        </div>
    )
}