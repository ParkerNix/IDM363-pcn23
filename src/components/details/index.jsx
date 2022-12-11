import { useParams } from "react-router-dom"
import { format_price } from "../../funcs/money";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cart"

export const Details = () => {
    const item_slicey = useSelector((state) => state.item_slicey.value);

    function getItem(key) {
        return Object.values(item_slicey).find(
            (item) => item.id === key
        );
    };
    

    let params = useParams();
    let item = getItem(params.itemKey);

    const dispatch = useDispatch();

    function add_to_cart(id, title, price, desc){
        dispatch(addToCart({
            id, title, price, desc
        }));
    }

    return (
        <>
            <div className="card mb-5" key={item.id}>
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.desc}</p>
                    <button onClick={() => add_to_cart(item.id, item.title, item.price, item.desc)}>ADD TO CART {format_price(item.price)}</button>
                </div>
            </div>
        </>
    )
}