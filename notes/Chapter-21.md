# Context API & useContext Hook

Cleaned up code, made the code more efficient and clean.
- All the code in the App.js is moved to the DataContext.js
- This is imported into the App.js and all the functions and variables are accessed through the import of DataContext.Provider
```JSX
import { createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import api from '../api/posts';

import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';


const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();

    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]);

    useEffect(() => {
        const filteredResults = posts.filter(post =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        try {
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter(post => post.id !== id);
            setPosts(postsList);
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    return (
        <DataContext.Provider value={{
            width, search, setSearch, searchResults, fetchError, isLoading,
            handleSubmit, postTitle, setPostTitle, postBody, setPostBody,
            posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle,
            handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
```

The shortened App.js
```JSX
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';

import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog" />
        <Nav />
        <Routes>
          <Route index path='/' Component={Home} />
          <Route path='/post' Component={NewPost} />
          <Route path='/edit/:id' Component={EditPost} />
          <Route path='/post/:id' Component={PostPage} />
          <Route path='/about' Component={About} />
          <Route path='*' Component={Missing} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
```

An example of how the DataContext.js is being used to import methods and variables.
- This the NewPost.js
- By importing the DataContext, the variables are no longer destructured through the params.
- The variables are set in the function NewPost which the values are obtained through the DataContext.
```JSX

import { useContext } from 'react';
import DataContext from './context/DataContext';

const NewPost = () => {
    const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext);

    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost
```
Cleaned DataContext variables and Methods into the appropriate components.