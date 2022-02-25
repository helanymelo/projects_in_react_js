import React,{useState} from 'react'
import { FaTrashAlt } from  'react-icons/fa';


function Content() {
    const [items, setItems] = useState([
        {
            id:1,
            checked:false,
            item: 'milk'
        },

        {
            id:2,
            checked:false,
            item: 'condensed milk'
        },

        {
            id:3,
            checked:true,
            item: 'cocoa'
        },
    ])
    
    const handleCheck = (id) =>{
        const listItems = items.map((item)=> item.id === id ? { ...item, 
        checked: !item.checked} :item)
        setItems(listItems)
        console.log(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    const handleDelete = (id) =>{
        const listItems = items.filter((item) => item.id !== id)
        console.log(listItems)
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    
    

    return (
        <main>
           {items.length ? (
                <ul>
                    {items.map((item)=>(
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheck(item.id)}
                            />
                            <label 
                                style={(item.checked) ? {textDecoration:'line-through'} : null}
                                onDoubleClick={() => handleCheck(item.id)}>
                                {item.item}
                            </label>


                            <FaTrashAlt 
                            onClick={() => handleDelete(item.id)}
                            role='button' 
                            tabIndex={"0"}/>
                            
                        </li>
                    ))}
                </ul>
            ) : (
                 <p>Sua lista está vazia</p>
            )}
                    
                      
        </main>
    )
}

export default Content
