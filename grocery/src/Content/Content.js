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
        console.log(handleCheck)
    }

    
    

    return (
        <main>
            <ul>
                {items.map((item)=>(
                    <li className='item' key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt 
                            role='button'
                            tabIndex={"0"}
                
                        />
                    </li>
                ))}
            </ul>

        </main>
    )
}

export default Content
