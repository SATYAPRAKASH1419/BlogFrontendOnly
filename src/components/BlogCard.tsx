import { Link } from "react-router-dom";

interface BlogCardProps {
    id:number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
    id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return ( 
    <Link to={`/blog/${id}`}>
        <div className="mt-3 pt-2 pb-2 border-b-2 border-slate-400 cursor-pointer">
      <div className="flex justify-start items-center gap-2">
        <Avatar name={authorName} />
        <div className="font-normal">{authorName}</div>
        <div className="text-xs">&#9679;</div>
        <div className="font-light">{publishedDate}</div>
      </div>
      <div className="font-bold text-2xl pt-2 leading-tight text-justify">
        {title}
      </div>
      <div className="font-light text-xl pt-1 mt-1 leading-tight font-serif text-justify">
        {content.slice(0, 250) + "..."}
      </div>
      <div className="mt-8 font-normal text-sm  text-slate-600">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "big" | "small";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-medium ${
          size == "small" ? "text-xs" : "text-md"
        } text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
