import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

const initialPosts = [
  {
    id: 1,
    title: "Introduction to React",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable components.",
  },
  {
    id: 2,
    title: "Understanding React Router",
    content:
      "React Router allows us to create multiple pages and navigate between them without refreshing the browser.",
  },
  {
    id: 3,
    title: "Learning Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that makes it easy to build modern and responsive interfaces.",
  },
];

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};