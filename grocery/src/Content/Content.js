import ItemList from "../ItemList/ItemList"

function Content({items, handleCheck, handleDelete}) {
    return (
        <main>
           {items.length ? (
            
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />

            
                ) : (
                    <p>Sua lista está vazia</p>
                )}
                    
                      
        </main>
    )
}

export default Content
