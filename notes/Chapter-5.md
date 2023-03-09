# Click Events

## Types of click events
 - First click event (handleclick), will log 'clicked' into the console, when the button is pressed, this is called by <code>'onClick={handleclick}'</code>
 - Second click event (handleclick2), has a parameter which is called in and outputted in the console. When the function is called it needs to send an argument such as <code>'onClick={() => handleClick2('Ranjeth')}'</code>
 - Third click event (handleclick3), uses an event handler 'e', which can log all properties of the button click. In this case the event has to be passed and the console outputs the desired data. <code>console.log(e.target.innerText);</code>
```JSX
const Content = () => {

    const handleClick = () => {
        console.log('Clicked !');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked.`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    

    return (
        <main>
            <p>{data.firstname} {data.lastname}</p>
            <p onDoubleClick={handleClick}>
                Hello!
            </p>
            <button onClick={handleClick}>Click it!</button>
            <button onClick={() => handleClick2('Ranjeth')}>Click it!</button>
            <button onClick={(e) => handleClick3(e)}>Click it!</button>
        </main>
    )
}
```