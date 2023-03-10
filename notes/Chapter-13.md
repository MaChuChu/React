# Fetch API Data

Creating the json server, with port number and link to database.
```bash
npx json-server -p 3500 -w data/db.json
```

Constant url, as this value will not change.
```JSX
const API_URL = 'http://localhost:3500/items';
```

Using useEffect to obtain items in the database. 
- A fetch request is inform of a function which is an async/await function.
- The response fetches the API_URL which is the link to the json-server.
- This response is then turned into a json, which is called listItems.
- The listItems is passed to setItems to create all the items in the array.
- The fetchItems is an async function therefore it needs to be called within the anonymous useEffect.
```JSX
const API_URL = 'http://localhost:3500/items';

const [items, setItems] = useState([]);

useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (error) {
        console.log(error.stack);
      }
    }

    fetchItems();
  }, []);
```
Fetch can be called in two ways within the useEffect.
```JSX
fetchItems();
(async () => await fetchItems())();
```
Fixing Error handling. 
- response.ok is the status code for http 200.
- The error is catch with the if statement.
- The error.message returns the Error message previously created.
```JSX
const [fetchError, setFetchError] = useState(null);
if (!response.ok) throw Error('Did not receive expected data');

catch (error) {
    console.log(error.message);
}
```
Fragment
- No element inside the <>
- The parent element is in the App.js
```JSX
const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>List is empty...</p>
            )}
        </>
    )
}
```
When there is a fetchError.
- A message in red prompting to the user that there is an error.
- The content can only be shown if there is no fetchError.
```JSX
<main>
    {fetchError && <p style={{ color:"red" }}>{`Error: ${fetchError}`}</p>}
    {!fetchError && <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    />}
</main>
```
Making the program wait to fetch the items to simulate json-servers which aren't hosted locally.
- The timeout is waiting for 2 seconds then calls the fetchItems.
```JSX
setTimeout(() => {
    fetchItems();
}, 2000);
```
Creating a state for when the app is loading when fetching data.
- The state is a boolean, and is true as the app is loading when it starts.
```JSX
const [isLoading, setIsLoading] = useState(true);
```
- The isLoading is set to false through a finally block.
```JSX
useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 2000);
}, []);
```
- isLoading is true, text will be in the main declaring to the user the data is being fetched.
- The content will only be shown if the fetchError and isLoading is false.
```JSX
<main>
    {isLoading && <p>Loading Items...</p>}
    {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
    {!fetchError && !isLoading && <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
    />}
</main>
```