# Chapter 1 : Introduction to React

This code creates a construct/struct of a data type with two variables which can be reaclled in js:
```JSX
const data = {
    firstname: "Ranjeth",
    lastname: "Ravichandran"
  }
```

When this function is called it randomaly return a name in the array.
```JSX
const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Ranjeth'];
    const randInt = Math.floor(Math.random() * 3);
    return names[randInt];
  }
```

This code shows how variables in functions can be called on a html page using react.
```JSX
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.firstname} {data.lastname}</p>
        <p>Random Name : {handleNameChange()} !</p>
      </header>
    </div>
  );
```

ES7 Snippet search
```
CTRL + ALT + R
```
---
## Functional Components
Componenets can be created seperatly and called from other components.
```JSX
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}
```
Content component : This is called from the App.js file.
```JSX
const Content = () => {

    const data = {
        firstname: "Ranjeth",
        lastname: "Ravichandran"
      }
    
      const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Ranjeth'];
        const randInt = Math.floor(Math.random() * 3);
        return names[randInt];
      }

    return (
        <main>
            <p>{data.firstname} {data.lastname}</p>
            <p>Random Name : {handleNameChange()} !</p>
        </main>
    )
}

export default Content;
```