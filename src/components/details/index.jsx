const item = {
    title: "Tape",
    text: "omg tape yall",
    id: 1
}

export const Details = () => {
    return (
        <>
            <div className="card mb-3" key={item.id}>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-text">{item.text}</p>
                    <button>REMOVE FROM CART</button>
                </div>
            </div>
        </>
    )
}