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
    <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <button>REMOVE FROM CART</button>
    </div>
  ))

export const Cart = () => {
    return (
        <>
            {cartItems}
        </>
    )
}