import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post. It\'s exciting to start this journey of sharing my thoughts and experiences with the world. I hope you enjoy reading and find something valuable here!', date: '2023-04-01' },
  { id: 2, title: 'Reflections on Life', content: 'Life is a beautiful journey filled with ups and downs. In this post, I share some of my personal reflections on what makes life meaningful and how we can find joy in the small moments.', date: '2023-04-15' },
  { id: 3, title: 'The Joy of Coding', content: 'Coding is more than just a job for me - it\'s a passion. In this post, I explore why I love programming, the challenges it presents, and the incredible satisfaction of solving complex problems.', date: '2023-05-01' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Link to="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to all posts</Link>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.date}</p>
        <p className="leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
