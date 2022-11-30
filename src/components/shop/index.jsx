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

const allItems = items.map((item) => (
    <div className="card mb-3" key={item.id}>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">{item.text}</p>
            <button>ADD TO CART $<span>{item.price}</span></button>
        </div>
    </div>
  ))

export const Shop = () => {
    return (
        <>
            {allItems}
        </>
    )
}