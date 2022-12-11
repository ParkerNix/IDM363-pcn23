
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export const Shop = () => {
    const item_slicey = useSelector(( state ) => state.item_slicey.value);

    return(
    <>
        <div className='row'>
            <h2 className="h1">Shop</h2>
            <Outlet />
            <h3 className="h2">All Flavors</h3>
            {Object.values(item_slicey).map((item) => {
                return (
                    <div
                        className="card mb-3 p-3"
                        key={item.id}
                    >
                        <h4 className="h3">{item.title}</h4>
                        <Link 
                        to={`/shop/${item.id}`}
                        >
                        <button className="py-2 px-2">SEE MORE</button>
                        </Link>
                    </div>
                )}
            )}
        </div>
    </>
    );
};