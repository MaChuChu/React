# React useEffect Hook
Every time
```JSX
useEffect(() => {
    console.log('load time');
  });
```
Only at load time
```JSX
useEffect(() => {
    console.log('load time');
  }, []);
```
Updating based on item state
```JSX
useEffect(() => {
    console.log('updating item state');
  }, [items]);
```
Order of when use effect is called.
```JSX
  console.log('Before useEffect');

  useEffect(() => {
    console.log('inside useEffect');
  }, [items]);

  console.log('After useEffect');
```
```txt
    Before useEffect
    After useEffect
    inside useEffect
```
Using useEffect in tutorial.
Called at load time. Setting all the items in the local storage to the items.
```JSX
const [items, setItems] = useState([]);

useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('shoppinglist')));
  }, []);
```
Short circuit operator, used when there is no shoppinglist in the local storage.
```JSX
const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
```