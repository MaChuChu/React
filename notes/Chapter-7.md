# Lists & Keys

## Creating a list with mutliple attributes.
```JSX
const Content = () => {
    
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One hald pound bag of Cocoa Covered Alomonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);
}
```
## HTML for accessing list onto the webpage.
 - The unordered list is using map to re-create an array and creating the subsidory elements for each list item.
 - The map is creating a list item, input, a label and a button using font-awesome.
 - Each list item holds an id which is needed to diffrientiate the list items in react.
 - When the list is completely empty, a terniary statement connected to the end of the unordered list, initilises a html paragraph which promts the user that the list is empty.
```JSX
const Content = () => {
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input 
                                type="checkbox" 
                                onChange={() => handleCheck(item.id)} 
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through'} : null} 
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt 
                                onClick={() => handleDelete(item.id)}
                                role={"button"} 
                                tabIndex="0" 
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>List is empty...</p>
            )}
        </main>
    )
}
```
## Methods
 - HandleCheck method passes an id which is used to access a specific item element in items.
 - listItems is an array of items which re-creates the array of items with flipped checked values depending on the id passed.
 - The checked status is set with the setter of the useState.
```JSX
const Content = () => {

    const handleCheck = (id) => {
        // Create an array of items, and flips items checked.
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        // Creates an array without the passed item.
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
}
```
 - HandleDelete method removes the passed item using the items id.
 - listItems is an array of items which re-creates the array of items, without the the passed item id.
 - The listItems is set with useState setter.
```JSX
const Content = () => {

    const handleDelete = (id) => {
        // Creates an array without the passed item.
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
}
```
