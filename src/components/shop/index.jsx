
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

/*const items = [
    {
        id: 1,
        title: "Isabelle",
        text: "Omg Isabelle yessss",
        price: "4.00"
    },

    {
        id: 2,
        title: "Jigglypuff",
        text: "JIIIIGGAAALYYYYYYPUUUUUUFF JIGGAAALYYyyYYYPUUUUUFF",
        price: "4.50"
    }
]

const allItems = items.map((item) => (
    <div className="card mb-3" key={item.id}>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">{item.text}</p>
            <button>ADD TO CART $<span>{item.price}</span></button>
            <Link to={`/details`} key={item.id}><button>SEE MORE</button></Link>
        </div>
    </div>
  ))

export const Shop = () => {
    return (
        <>
            <Outlet />
            {allItems}
        </>
    )
}*/



export const Shop = () => {
    const item_slicey = useSelector((state) => state.item_slicey.value);

    return(
    <>
        <div className='row'>
            {item_slicey.map((item) => {
                return (
                    <div className="card">
                        <h2>{item.title}</h2>
                        <Link 
                        to={`/shop/${item.id}`}
                        className="text-decoration-none col-sm-6 col-md-4 col-lg-3" 
                        key={item.id}
                        >
                        <button>SEE MORE</button>
                        <Outlet />
                        </Link>
                    </div>
                )}
            )}
        </div>
    </>
    );
};