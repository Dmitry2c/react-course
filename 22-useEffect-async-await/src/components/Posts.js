import Post from "./Post";
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData()
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setTodo(json))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      {isLoading ? <h1>Loading...</h1> : posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
}

export default Posts;
