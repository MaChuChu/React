# useState Hook

Using useState for name and count, these work like getters and setters, using reacts useState function.
Data can be easily updated with useStates.
```JSX
const Content = () => {
    const [name, setName] = useState('Ranjeth');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Ranjeth'];
        const randInt = Math.floor(Math.random() * 3);
        setName(names[randInt]);
    }

    const handleClick = () => {
        console.log(setCount(count + 1), count);
    }
}
```