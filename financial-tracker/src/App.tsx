import React, {useState, useEffect} from 'react';
import * as C  from "./App.styles";
import {Item} from "./types/Item";
import { Category } from "./types/Category";
import {items} from "./data/items"
import { categories } from "./data/categories";
import { FilteredListByMonth, getCurrentMonth } from './helpers/dateFilters';
import { TableArea } from './components/TableArea';

const App =() =>{
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [ currentMonth, setCurrentMont] = useState(getCurrentMonth())

  useEffect(()=>{
    
  },[list, currentMonth])

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Financial Wallet System
        </C.HeaderText>
      </C.Header>

      <C.Body>
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>

  )
}
export default App;