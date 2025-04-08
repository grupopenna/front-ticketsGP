import TableSkeleton from "./TableSkeleton"

export const DailyReportSkeleton = ()=>{
  return(
    <div className="w-full h-full py-5 px-10 flex flex-col gap-10">
      <div className="flex justify-around items-end h-52 gap-5 border-l border-b border-colOff-off">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1/6 h-28 bg-colOff-off animate-pulse rounded">
          </div>
        ))}
      </div>
      <TableSkeleton/>

    </div>
  )
}