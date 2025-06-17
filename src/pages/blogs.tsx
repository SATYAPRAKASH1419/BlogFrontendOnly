import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div className="flex  h-screen  justify-center items-center">
        <div>Loading...........</div>
    </div>
  }
  return (
    <div>
      <div className="sticky top-0 z-50  bg-white/30 backdrop-blur-md">
        <Appbar />
      </div>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-2xl">
            {blogs.map(blog=><BlogCard
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate="2nd may"
            />)}
        </div>
      </div>
    </div>
  );
};
