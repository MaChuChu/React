# CRUD Operations

Read Operation
```JSX
const [fetchError, setFetchError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchItems = async () => {
        try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
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

Create Operation
```JSX
const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }
```
Update Operation
```JSX
const handleCheck = async (id) => {
    // Create an array of items, and flips items checked.
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }
```
Delete Operation
```JSX
const handleDelete = async (id) => {
    // Creates an array without the passed item.
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }
```