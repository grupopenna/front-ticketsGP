const TableSkeleton = () => {
  return (
    <div className="w-full h-screen p-4 gap-5">
      {/* Header de la tabla */}
      <div className="flex h-12 justify-between p-2 animate-pulse rounded bg-colOff-off ">
      </div>
      {/* Filas de la tabla */}
      <div className="divide-y divide-colOff-off py-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex justify-between p-2 gap-2">
            <div className="w-1/6 h-7 bg-colOff-off animate-pulse rounded"></div>
            <div className="w-1/6 h-7 bg-colOff-off animate-pulse rounded"></div>
            <div className="w-1/6 h-7 bg-colOff-off animate-pulse rounded"></div>
            <div className="w-1/6 h-7 bg-colOff-off animate-pulse rounded"></div>
            <div className="w-1/6 h-7 bg-colOff-off animate-pulse rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;