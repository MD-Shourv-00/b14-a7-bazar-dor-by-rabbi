export default function Loading() {
  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-center gap-4">
      {/* Animated Spinner Wheel */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

      {/* Optional Loading Text */}
      <p className="text-sm font-medium text-gray-500 animate-pulse">
        Loading data, please wait...
      </p>
    </div>
  );
}
