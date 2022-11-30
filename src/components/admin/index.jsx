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
    <div key={item.id}>
        <input type="text" value={item.title}></input>
        <input type="text" value={item.text}></input>
        <input type="text" value={item.price}></input>
    </div>
  ))

export const Admin = () => {
    return (
        <>
            {editItems}
        </>
    )
}
