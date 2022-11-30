let items = [
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

let editItems = items.map((item) => (
    <div className="card mb-3" key={item.id}>
        <div className="card-body d-flex flex-column">
            <h2 className="h4">Title</h2>
            <input type="text" value={item.title} className="mb-3"></input>
            <h2 className="h4">Description</h2>
            <input type="text" value={item.text} className="mb-3"></input>
            <h2 className="h4">Price</h2>
            <input type="text" value={item.price} className="mb-3"></input>
        </div>
    </div>
  ))

export const Admin = () => {
    return (
        <>
            {editItems}
        </>
    )
}
