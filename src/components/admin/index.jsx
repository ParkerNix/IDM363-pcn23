import { useSelector } from "react-redux";
import AdminItem from "../admin_item";

export const Admin = () => {
    const item_slicey = useSelector((state) => state.item_slicey.value);
  
    return(
        <>
            <h2 className="h1">Administrator Controls</h2>
            {Object.values(item_slicey).map((item) => (
                    <AdminItem
                        key={`admin-${item.id}`}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        desc={item.desc}
                    />
                )
            )}
        </>
    )
}


export default Admin;