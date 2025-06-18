export const AllBlogSkeleton = () => {
  return (
    <div className="flex flex-col items-center space-y-10 w-full px-6 py-10 animate-pulse">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="w-full max-w-4xl space-y-4 border-b pb-8">
          {/* Top Row: Avatar + Name + Date */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <div className="h-3 w-16 bg-gray-300 rounded" />
            <div className="h-3 w-20 bg-gray-200 rounded" />
          </div>

          {/* Title */}
          <div className="h-5 w-3/4 bg-gray-400 rounded" />

          {/* Content preview lines */}
          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-300 rounded" />
            <div className="h-3 w-5/6 bg-gray-300 rounded" />
            <div className="h-3 w-2/3 bg-gray-300 rounded" />
          </div>

          {/* Footer: Read time bar */}
          <div className="h-3 w-24 bg-gray-200 rounded mt-4" />
        </div>
      ))}
    </div>
  );
};
