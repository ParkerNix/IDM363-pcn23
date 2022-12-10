import { format_price } from "../../funcs/money";

const items = [
    {
        id: 1,
        title: "Isabelle",
        text: "Omg Isabelle yessss",
        price: "400"
    },

    {
        id: 2,
        title: "Jigglypuff",
        text: "JIIIIGGAAALYYYYYYPUUUUUUFF JIGGAAALYYyyYYYPUUUUUFF",
        price: "450"
    }
]

const cartItems = items.map((item) => (
    <div className="card mb-3" key={item.id}>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <button>ADD TO CART: {format_price(item.price)}</button>
        </div>
    </div>
  ))

export const Cart = () => {
    return (
        <>
            {cartItems}
        </>
    )
}