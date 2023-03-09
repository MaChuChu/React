# Applying CSS Styles

## Inline Style
Styling header content with inline css styling.
```JSX
const Header = () => {
    const headerStyle = {
        backgroundColor: 'lightblue',
        color: 'royalblue'
    };

    return (
        <header style={headerStyle}>
            <h1>Groceries List</h1>
        </header>
    )
}
```

## External CSS
Importing an external css file to a component will style the page automatically. <br>
For styling individual components, seperate imports and files will need to be made.
```JSX
import './index.css';
```