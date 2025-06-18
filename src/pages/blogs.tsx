import { AllBlogSkeleton } from "../components/AllBlogSkeleton";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>
      <div className="sticky top-0 z-50  bg-white/30 backdrop-blur-md">
        <Appbar />
      </div>
      <div className="flex  h-screen  justify-center items-center">
        <AllBlogSkeleton/>
    </div>
    </div>
  }
  return (
    <div>
      <div className="sticky top-0 z-50  bg-white/30 backdrop-blur-md">
        <Appbar />
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="mx-auto max-w-4xl">
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
