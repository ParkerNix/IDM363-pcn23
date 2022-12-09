const items = [
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

const cartItems = items.map((item) => (
    <div className="card mb-3" key={item.id}>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <button>REMOVE FROM CART</button>
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