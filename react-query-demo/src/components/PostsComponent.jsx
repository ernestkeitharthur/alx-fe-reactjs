import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    "posts", // Cache key
    fetchPosts,
    {
      staleTime: 5000, // Cache remains fresh for 5 seconds
      cacheTime: 300000, // Cache stays for 5 minutes
      refetchOnWindowFocus: false, // Disable refetching on window focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Data"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
