
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { format_price } from "../../funcs/money";

export const Shop = () => {
    const item_slicey = useSelector((state) => state.item_slicey.value);

    return(
    <>
        <div className='row'>
            {Object.values(item_slicey).map((item, index) => {
                return (
                    <Link 
                        to={`/shop/${item.keyName}`}
                        className="text-decoration-none col-sm-6 col-md-4 col-lg-3" 
                        key={index}
                    >
                        <h2>{item.title}</h2>
                        <button>ADD TO CART: {format_price(item.price)}</button>
                        <Outlet />
                    </Link>
                )}
            )}
        </div>
    </>
    );
};