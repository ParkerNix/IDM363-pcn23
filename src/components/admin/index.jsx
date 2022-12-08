import { useContext } from "react"
import { StoreContext } from "../../contexts/store"

export const Admin = () => {
    const state = useContext(StoreContext)
    let items = state.items
    console.log(items)

    let editItems = items.map((item) => (
        <div className="card mb-3" key={item.id}>
            <div className="card-body d-flex flex-column">
                <h2 className="h4">Title</h2>
                <input type="text" value={item.title} className="mb-3"></input>
                <h2 className="h4">Description</h2>
                <input type="text" value={item.desc} className="mb-3"></input>
                <h2 className="h4">Price</h2>
                <input type="text" value={item.price} className="mb-3"></input>
            </div>
        </div>
    ))
    return (
        <>
            {editItems}
        </>
    )
}
