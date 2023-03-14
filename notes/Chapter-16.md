# React Router

Installing router dependency
```BASH
npm i react-router-dom -S
```
Importing components
```JSX
import { BrowserRouter as Router, Route } from 'react-router-dom';
```
Specified the app component will respond to the root route for the application.
- This allows the application to use react-router, including hooks from the package.
```JSX
<Router>
    <Route path='/' Component={App} />
</Router>
```
Importing components for the page, these are static as they won't be changed.
```JSX
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
```
Importing five different options to route to in the main area of the page.
```JSX
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
```
Importing states and hooks from react-router-dom and react.
- These are old imports
```JSX
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
```
- New imports from the latest react-router-dom documentation.
```JSX
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
```
Routing to the correct pages in App.
- The Header, Nav and Footer are always present.
- The links in the routes can be accessed when changing the route in the URL.
- such as <code>localhost:3000/post</code>
```JSX
<Header />
<Nav />
<Routes>
    <Route index path='/' element={<Home />} />
    <Route path='/post' element={<NewPost />} />
    <Route path='/post/:id' element={<PostPage />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<Missing />} />
</Routes>
<Footer />
```
- The video is a bit dated therefore the code had t be changed due to newer dependency of react-router-dom.

Installing production dependency for datetime.
```BASH
npm i date-fns -S
```