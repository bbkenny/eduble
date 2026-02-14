export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <SkeletonLoader className="h-4 w-24 mb-2" />
      <SkeletonLoader className="h-8 w-16 mb-2" />
      <SkeletonLoader className="h-3 w-32" />
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <SkeletonLoader className="h-6 w-32 mb-4" />
      <SkeletonLoader className="h-64 w-full" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex gap-4 mb-4">
        <SkeletonLoader className="h-4 w-24" />
        <SkeletonLoader className="h-4 w-32" />
        <SkeletonLoader className="h-4 w-20" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 py-3 border-t border-gray-100">
          <SkeletonLoader className="h-4 w-24" />
          <SkeletonLoader className="h-4 w-32" />
          <SkeletonLoader className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}