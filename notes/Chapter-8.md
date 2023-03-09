# Props & Prop Drilling

## Props
Values can be sent arbitrarily to other child classes.
```JSX
    <Header title="Groceries List" />
```
The value title is sent to the Header.js file and is recalled within the abstract function by <code>{title}</code>. This value can then be used throughout the function.
```JSX
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
```
Multiple values can also be passed as shown here.
- An array of items is being sent over to Content.js
- A method handle check is passed to Content.js
- The method handleDelete is passed to Content.js 
```JSX
function App() {
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}
```
---
## Props Drilling
Props drilling is similar to OOP Inheritance, where methods and attributes are sent over to child classes by the super/parent class.
- The props have been sent to Content.js from the App.js file.
- These props have been passed over to the ItemList.js class from the Content.js

The values and methods have been sent from App -> Content -> ListItems.

```JSX
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>List is empty...</p>
            )}
        </main>
    )
}
```
---
## Destructuring
This is when the props passed over are broken down and implemented within other files, this is clear code and make the overall readability better.
- App -> Content -> ItemList -> LineItem
- This is the flow of the passed props, which has been deconstructed.
```JSX
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}
```
```JSX
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role={"button"}
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}
```