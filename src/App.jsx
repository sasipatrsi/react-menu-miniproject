import { useState } from 'react'
import items from './data'
import Menu from './Menu'
import Title from './Title'
import Categories from './Categories'

// const tempCategories = menu.map((item) =>item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', {...tempSet}];
// console.log(tempItems);
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  // console.log(categories);

  const filterItems = (category) => {
    // console.log(category);
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
