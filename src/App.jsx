import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import items from './components/Data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allcategories = ['all',...new Set(items.map ((item) => item.category))]


function App() {
  const[menuItems, setMenuItems] = useState(items)
  // eslint-disable-next-line no-unused-vars
  const [categories,setcategories] = useState(allcategories);

  const filterItems = (category) =>{
    if (category === 'all'){
      return setMenuItems(items);
    }
      const newItems = items.filter((item) => item.category === category)
      return setMenuItems(newItems)

  }
  return (
     <div className="container">
       <div className='row'>
         <div className='col-md-12'>
           <h2 className='enca text-center py-5'>Our Menu</h2>
           <Categories filterItems={filterItems} categories={categories} />

         <Menu items={menuItems} />

         </div>
       </div>
     </div>
  );
}
export default App;
