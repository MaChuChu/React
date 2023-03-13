# Fetch Data Challenge

## Part A
Creating an App using the API (https://jsonplaceholder.typicode.com/).
Part A of the challenge:
- Create a site with BUTTONS (Users, posts, comments)
- Each button fetches the appropriate data from the API.
- The data is displayed separately on the site, using lists.
---

Grabbing the API ROUTE.
```JSX
const API_URL = 'https://jsonplaceholder.typicode.com/';
```
Creating the useStates, one for the type of request (post) from the users db.
```JSX
const [reqType, setReqType] = useState('users');
```
Another useState for JSON array, obtained from the database in the API.
```JSX
const [items, setItems] = useState([]);
```
useEffect which is run at load time.
- This use effect is run anytime the reqType changes.
- This can happen when the user comments or posts.

- The function inside the useEffect, fetchItems is an async function.
- This is an anonymous function which uses a try-catch block.
- The function is fetching the data from the API & reqType URL.
- The data is obtained by extracting the response.json
- The data is then passed to setItems.
```JSX
useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
  }, [reqType]);
```
Sending the requestType and setReqType to the Form.
```JSX
<Form reqType={reqType} setReqType={setReqType} />
```
Using a form and the onsubmit function to prevent the default submit every time the page is re-loaded.
```JSX
<form onSubmit={(e) => e.preventDefault()}>
```
Created a button class for the buttons on the page. These are used within the form
```JSX
<form onSubmit={(e) => e.preventDefault()}>
    <Button />
    <Button />
    <Button />
</form>
```
The button are passing different parameters to the button class.
- The buttons have different buttonText to differentiate the buttons.
```JSX
<Button
    buttonText="users"
    reqType={reqType}
    setReqType={setReqType}
/>
<Button
    buttonText="posts"
    reqType={reqType}
    setReqType={setReqType}
/>
<Button
    buttonText="comments"
    reqType={reqType}
    setReqType={setReqType}
/>
```
Destructing the parameters sent to button from the form.
```JSX
const Button = ({ buttonText, reqType, setReqType })
```
Adding attributes to the buttons.
- The className is chosen based on the button text and the reqType, if it is true then the className is selected otherwise it is null. This uses a ternary statement.
- The type of the button is button.
- The button has a onclick action, when the button is pressed, the buttonText is sets teh reqType. Such as users, posts, comments, this will be concatenated to the url.
```JSX
<button
    className={buttonText === reqType ? "selected" : null}
    type="button"
    onClick={() => setReqType(buttonText)}
>
    {buttonText}
</button>
```
Back to the main App.js, the content of the database will be displayed with a List.
- The data obtained from the fetch is saved onto the useState items.
- This data is then passed to the List class.
```JSX
<List items={items} />
```
The List class destructured the items prop.
- The items are held inside in unsorted List.
- The items are mapped, therefore each item in the items array is being looped.
- The ListItem is created for each item in the items list.
- A key which is the item id and the item itself is being sent to the ListItem
```JSX
const List = ({ items }) => {

    return (
        <ul>
            {items.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}
```
The ListItem creates a li. For each time this is created a list is created with the item data printed on the page.
```JSX
const ListItem = ({ item }) => {
    return (
        <li>
            {JSON.stringify(item)}
        </li>
    )
}
```
---
## Part B
Creating a table with all the data separated into their own cell.
- Map through each key of the object, object.entries mdn.
- JSON.stringifies still applies.

Creating a table component in the App.js and passing the items.
```JSX
<Table items={items} />
```

The table component has a div as a container to hold all the elements in.
- The table holds a tbody with the items mapped for each item a Row component is added on the table.
- A key and the item is passed to the Row.
```JSX
const Table = ({ items }) => {
    return (
        <div className="container">
            <table>
                <tbody>
                    {items.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
```
The Row component holds the objects of the json data.
- To extract the object of the JSON data, the line Object.entries splits the data from the item that was passed.
- Mapping the objects into an array, each with its own key and value.
- A cell is then created for each object in the item present.
- A key and cellData is passed to the Cell component.
```JSX
const Row = ({ item }) => {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => {
                return (
                    <Cell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )
}
```
The cell has the prop cellData and this data is presented onto a td (table data).
```JSX
const Cell = ({ cellData }) => {
    return (
        <td>
            {cellData}
        </td>
    )
}
```