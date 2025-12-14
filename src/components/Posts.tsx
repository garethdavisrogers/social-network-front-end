import '../app/App.css'
import type { Post } from '../types/features/Post';

type PostsProps = {
  posts: Post[];
};

export function Posts({ posts }: PostsProps) {
  return (
    <>
      <h1>Posts go here</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{/* render whatever Post has */}</li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
