export const SingleBlogSkeleton = () => {
  return (
    <div className="animate-pulse px-6 py-10 max-w-4xl mx-auto">
      {/* Title */}
      <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded w-1/2 mb-6"></div>

      {/* Date */}
      <div className="h-4 w-40 bg-gray-200 rounded mb-6"></div>

      {/* Author section (avatar + name) */}
      <div className="flex justify-end items-center space-x-3 mb-6">
        <div className="flex flex-col items-end">
          <div className="h-4 w-16 bg-gray-300 rounded mb-1"></div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Paragraph lines */}
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 ${
              i % 3 === 0 ? "w-5/6" : i % 4 === 0 ? "w-4/6" : "w-full"
            } bg-gray-200 rounded`}
          ></div>
        ))}
      </div>
    </div>
  );
};
