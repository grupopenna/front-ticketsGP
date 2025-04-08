import { TimerRounded } from "@mui/icons-material";
import HeaderWithButtons from "../../components/Header/HeaderWithButtons";
import { useEffect, useState } from "react";
import { TicketModal } from "../../components/Modal/TicketModal";
import { ClockReportModal } from "../../components/Modal/ClockReportModal";
import TableSkeleton from "../../components/Skeletons/TableSkeleton";
import { useAuthContext } from "../../store/useAuthContext";
import { taskStore } from "../../store/taskStore";

const MyTasks = () => {
  const [openReport, setOpenReport] = useState<any>(null)
  const { status } = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)
  const [fetchData, setFetchData] = useState(true)
  const { userTasks, getAreaTasksStore, modalTask, setModatTask } = taskStore()
  const {} = taskStore()

  useEffect(()=> {
    
    setIsLoading(false)

  },[isLoading])

  useEffect(()=> {
    if(fetchData){
      getAreaTasksStore(58)
    }
    setFetchData(false)
    setIsLoading(false)
    },[fetchData])

  return (
    <div>
      {modalTask != null && <TicketModal/>}
      {openReport && <ClockReportModal setOpenReport={setOpenReport} /> }
      <HeaderWithButtons title="Todas mis tareas"/>
      {isLoading || (status === 'checking')
        ? <TableSkeleton />
        : <div className="generalBody">
          <div className="tableHeader justify-between font-bold">
            <div className="w-[90%] flex pr-5 justify-between gap-3">
              <div className="flex gap-3 w-[15%]">
                <p className="w-20">Tablero</p>
                <p className="w-16">Id</p>
              </div>
              <p className="w-[45%]">Titulo</p>
              <p className="w-[15%]">Asignado</p>
              <p className="w-[15%]">Solicitante</p>
              <p className="w-[10%]">Estado</p>
            </div>
            <div className="w-[10%]">
              <p>Registrar Horas</p>
            </div>
          </div>
          <div className="rounded divide-y">
            {userTasks.length > 0 ? userTasks.map((t:any)=> 
              <div className="flex items-center py-2 px-5 hover:bg-bgLight-hover dark:hover:bg-bgDark-hover">
                <div className="w-[90%] flex pr-5 justify-between gap-3 hover:cursor-pointer" onClick={()=> setModatTask(t.task_id)}>
                  <div className="flex gap-3 w-[15%]">
                  <p className="w-20">{t.proyect}</p>
                  <p className="w-16">{t.key}-{t.task_id}</p>
                </div>
                <p className="w-[45%]">{t.title}</p>
                <div className="w-[15%] flex flex-col">{
                  t.asignee.length > 0 ?  t.asignee.map((a:any)=> <p>{a.name}</p>) : <p className="defaultText">Sin asignar</p>
                }</div>
                <p className="w-[15%]">{t.reporter.name}</p>
                <p className="w-[10%]">{t.state.name}</p>
                </div>
                <button onClick={() => setOpenReport(true)} className="w-[10%] flex justify-center items-center py-1 rounded hover:bg-bgLight-base hover:text-white">
                  <TimerRounded />
                </button>
              </div> 
              )
              : <p className="defaultText py-2 px-5">No se encontraron Tareas</p>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default MyTasks;