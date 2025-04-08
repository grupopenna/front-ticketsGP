import Header from "../../components/Header/Header"
import { DailyReportSkeleton } from "../../components/Skeletons/DailyReportSkeleton"

export const DailyReport = () => {
  return (
    <div>
      <Header title="Reporte Horario" />
      {true 
        ? <DailyReportSkeleton />
        : <div></div>
      }
    </div>
  )
}