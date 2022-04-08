import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header'
import React, {useState} from 'react';

function App() {

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

const [newItem, setNewItem] = useState()
    
    
    const handleCheck = (id) =>{
        const listItems = items.map((item)=> item.id === id ? { ...item, 
        checked: !item.checked} :item)
        setItems(listItems)
        console.log(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    const handleDelete = (id) =>{
        // const listItems = items.filter((item) => item.id !== id)
        const listItems = items.filter((item)=> item.id !== id)
        console.log(listItems)
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

  





  return (
    <div className="App">
      <Header />
      <Content 
      items={items}
      setItems = {setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}

      />
      <Footer length={items.length}

      />
      
    </div>
  );
}

export default App;
