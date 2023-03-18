# Custom Hooks

Running a json-server to a specific port which watches the data in the specific file.
```BASH
npx json-server -p 3500 -w data/db.json
```

Running React-App
```BASH
npm start
```

Creating a simple custom hook.
- Created a folder called hooks.
- Created file called useWindowSize.js
- cleanUp is called to prevent memory leaks.
```JS
import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        const cleanUp = () => {
            console.log("run if useEffect dep changes");
            window.removeEventListener("resize", handleResize);
        }

        return cleanUp;
    }, []);

    return windowSize;
}

export default useWindowSize;
```

installed react icons
```BASH
npm i react-icons
```
Changing icons based on the width
```JSX
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

const Header = ({ title, width }) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />}
        </header>
    )
}

export default Header
```

CleanUp function is the return in an useEffect.
```JSX
return () => window.removeEventListener("resize", handleResize);
```

Custom axios hook.
```JSX
import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error) {
                if (isMounted) {
                    setFetchError(error.message);
                    setData([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            console.log('Clean up function');
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl]);

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;
```
Full url in app.js to use axios fetch.
```JSX
const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
```
Changed useEffect in app.js
```JSX
useEffect(() => {
    setPosts(data); 
}, [data]);
```
This data is sent to the home page.
```JSX
<Route index path='/' element={<Home
    posts={searchResults}
    fetchError={fetchError}
    isLoading={isLoading}
/>} />
```
Home page
```JSX
import Feed from './Feed';

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>Loading Posts...</p>}
            {fetchError && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className='statusMsg'>No posts to display.</p>)}
        </main>
    )
}

export default Home
```