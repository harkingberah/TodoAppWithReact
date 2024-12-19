import React, { useState } from "react";
import TodoItem from "./TodoItem";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.length > 0) {
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }
  function removeItem(id) {
    //console.log(id)
    setItems(prevItems => {
      return prevItems.filter((item, index) => index !== id);
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem key={index} id={index} text={todoItem} onChecked={removeItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
