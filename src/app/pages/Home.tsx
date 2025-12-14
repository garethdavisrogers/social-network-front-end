import { useState } from 'react';
import {PostCreate } from '../../components/PostCreate';
import {Posts} from '../../components/Posts';
import type {Post} from '../../types/features/Post';
import '../App.css'

function Home() {

  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <>
      <h1>This is the homepage</h1>
      <PostCreate/>
      <Posts posts={posts}/>
    </>
  )
}

export default Home
