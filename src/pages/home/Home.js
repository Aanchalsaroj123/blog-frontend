import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import "./home.css";
import axios from "axios"
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://blog-backend-m77s.onrender.com/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>  <div className="headd">
      <Header />
       </div>
      <div className="home">
        <Posts posts={posts} />
      </div>
      <Footer/>
    </>
  )
}
