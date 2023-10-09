import { useState } from "react";
import Logo from "./Logo";
import Form from "./From";
import PackingList from "./PackingList";
import { Starts } from "./Starts";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false }
// ]

export default function App() {

  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems(items => [...items, item]);
  }


  function handelDeleteItem(id) {
    console.log(id);
    setItems(items => items.filter(item => item.id !== id))
  }


  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    // alert("Are you sure you want to delete all items", setItems([]))
    const confirmed = window.confirm("Are you sure you want to delete all items");
    if (confirmed) setItems([]);
  };


  return <div className="app">
    <Logo />
    <Form onAddItems={handelAddItem} />
    <PackingList items={items}
      onDeleteItem={handelDeleteItem}
      onToggleItem={handleToggleItem}
      handelClearList={handelClearList}
    />
    <Starts items={items} />
  </div>
}



