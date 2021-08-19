import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const client = axios.create({ 
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
     getPost();
  }, []);

  function createPost() {
    client
      .post("/", {
        title: "Hello World",
        body: "New Post"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  // function updatedPost() {
  //   client
  //     .put("/1", {
  //       title: "Hello World",
  //       body: "Updated Post"
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // async function deletePost() {
  //   await client
  //     .delete("/1")
  //       alert("Post Deleted");
  //       setPost(null);
  // }

  // if(error) return `Error:${error.message}`;
  if(!post) return "No Post!";

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default App;