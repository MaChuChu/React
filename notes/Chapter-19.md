# Axios API Requests

Created new data folder, to hold in the db.json file.
- This holds the data for the posts on the page.
```JSON
{
    "posts": [
        {
            "id": 1,
            "title": "1st post",
            "datetime": "July 16, 2021 11:47:39 AM",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 2,
            "title": "Second post",
            "datetime": "July 16, 2021 11:47:48 AM",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
        },
        {
            "id": 3,
            "title": "Number Three",
            "datetime": "July 16, 2021 11:48:01 AM",
            "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 4,
            "title": "Testing a 4th post",
            "datetime": "August 02, 2021 11:46:27 AM",
            "body": "Some more testing paragraphs!"
        }
    ]
}
```

Installing new dependancy "Axios"
```BASH
npm i axios -S
```

Created a api folder, which holds the posts.js file.
- This file imports axios from the dependancy.
- And links the project to the correct baseURL which in this case is 'http://localhost:3500'
```js
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500'
});
```

Running a json-server to a specific port which watches the data in the specific file.
```BASH
npx json-server -p 3500 -w data/db.json
```

Importing the api to the main app.
```jsx
import api from './api/posts';
```

Creating a useEffect to start at load time.
- Has a fetch function
- How axios handles fetch responses
- the response is linked to the posts.js
- This holds the axios function to get the URL
- the posts are set with the response data, obtained from the api.get method.
```JSX
useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          // Not in the 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    }

    fetchPosts();
  }, []);
```
Changing handleSubmit to work with axios, this works as the create/update of the CRUD operations.
- Inside the try/catch block holds a response value, this holds the function api.post which links to the posts.js
- Whenc reating a new post the newPost will be added to the db.json.
- the value allPosts will add the new data from response.data.
```JSX
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
```

Delete function change to work with axios.
- using the api.delete method which links to the posts, and send the specfic id to delete the post.
```JSX
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
```

Adding the update function.
- Using the api.put method to update an existing post.
- The post will only be edited if the post.id and the id passed are equal.
```JSX
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
```
- Adding the route for edit.
```JSX
<Route path='/edit/:id' element={
    <EditPost
    posts={posts}
    handleEdit={handleEdit}
    editTitle={editTitle}
    setEditTitle={setEditTitle}
    editBody={editBody}
    setEditBody={setEditBody}
    />
} />
```
- EditPost.js
```JSX
import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    return (
        <main className="NewPost">
            {editTitle && <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post</label>
                    <textarea
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            </>}
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>
                        <Link to='/'>Visit Homepage</Link>
                    </p>
                </>
            }
        </main >
    )
}

export default EditPost
```