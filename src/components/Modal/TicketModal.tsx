import { Clear, Edit } from "@mui/icons-material"
import { ClockReportModal } from "./ClockReportModal";
import { useEffect, useState } from "react";
import { TicketModalSkeleton } from "../Skeletons/TicketModalSkeleton";
import { taskStore } from "../../store/taskStore";

export const TicketModal = () => {
  const [openReport, setOpenReport] = useState<any>(null)
  const [loading, setIsLoading] = useState(true)
  const { taskById, modalTask, taskComments, getTasksByIdStore, setModatTask } = taskStore()

  useEffect(()=> {
    getData()
  }, [])

  const getData = async () => {
    try {
      await getTasksByIdStore(Number(modalTask))

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="absolute w-full h-full inset-0 z-10 flex items-center justify-center">
      {loading ? 
        <TicketModalSkeleton />
        : <div>
        {openReport && <ClockReportModal setOpenReport={setOpenReport} /> }
          <button
            onClick={() => setModatTask(null)}
            className="fixed inset-0 z-20 w-full h-full bg-black/80"
          ></button>
          {/* Contenedor del Modal */}
          {taskById &&
            <div className="fixed top-1/2 left-1/2 w-[80%] h-[80%] max-h-[90vh] flex flex-col bg-white dark:bg-bgDark-cards z-30 rounded py-3 px-5 gap-3 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              {/* Header del Modal */}
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold">{taskById?.title}</h3>
                <button className="text-red-600 hover:bg-red-600 rounded hover:text-white" onClick={() => setModatTask(null)}>
                  <Clear color="inherit" fontSize="large" />
                </button>
              </div>
              {/* Contenido del Modal */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sección Izquierda (Detalle, Usuarios, Comentarios) */}
                <div className="w-[70%] flex flex-col gap-5 border-r dark:border-white/30 border-black/30 px-3 overflow-y-auto">
                  {/* ------------- DESCRIPCION ------------- */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-base">Descripción</h4>
                    <div className="min-h-32 hover:dark:bg-bgDark-sectionBg hover:bg-black/10 rounded cursor-text text-sm p-2">
                      {
                        taskById?.descript ? <div>
                          <p>{taskById?.descript}</p>
                        </div>
                        : <p className='defaultText'> No se ha añadido descripción al ticket</p>
                      }
                    </div>
                    {true && <div className="flex gap-5">
                      <button className="btnOption">
                        Guardar
                      </button>
                      <button className="btnOption">
                        Cancelar
                      </button>
                    </div>}
                  </div>

                  {/* Usuarios Encargados */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-base">Usuarios Encargados:</h4>
                    {taskById?.asignee.length > 0  
                      ? taskById?.asignee.map((a:any) =><div key={a.id} className="flex w-full justify-between">
                        <div className="flex gap-2">
                          <h5 className="font-bold">Usuario:</h5>
                          <p>{a.name}</p>
                        </div>
                        {/* <div className="flex gap-2">
                          <h5 className="font-bold">Contacto:</h5>
                          <p>sistemas6@compc.com.ar</p>
                        </div> */}
                      </div>)
                      : <p className='defaultText'>Todavia no hay un usuario asignado</p>
                    }
                  </div>

                  {/* Comentarios */}
                  <div className=" flex max-h-44 flex-col gap-3">
                    <h4 className="font-bold text-base">Comentarios:</h4>
                    <div className='flex flex-col gap-2'>
                      <div className='bg-black/10 rounded h-10 hover:dark:bg-bgDark-sectionBg hover:bg-black/20'>
                        <p className='defaultText p-1 '> Ingresa tu comentario aqui:</p>
                      </div>
                      {false && 
                        <div className="flex gap-5">
                          <button className="btnOption">
                            Guardar
                          </button>
                          <button className="btnOption">
                            Cancelar
                          </button>
                        </div>
                      }
                    </div>
                    <div className='divide-y'>
                    {taskComments.length > 0
                      && taskComments.map ((c:any)=>
                        <div className="flex flex-col gap-3 py-2 border-b pb-5">
                          <div className='flex gap-5 text-sm'>
                            <p>{c.comment_date} </p>
                            <p>-</p>
                            <p>{c.comment_userId === 59 ? 'Tu' : c.fullName}:</p>
                          </div>
                          <p className='text-base px-3 indent-7 font-light'>{c.comment}</p>
                          {c.comment_userId === 59 && <button className="btnOption w-fit text-xs gap-2"> <Edit fontSize="small"/> editar</button> }
                        </div>
                    )}
                    </div>
                  </div>
                </div>

                {/* Sección Derecha Datos del Ticket  */}
                <div className="w-[30%] flex flex-col bg-gray-100 p-3 gap-5 overflow-y-auto">
                  <h4 className="font-bold text-base">Datos del Ticket:</h4>
                  <button className="bg-bgLight-hover hover:bg-bgLight-base hover:text-white dark:bg-bgDark-hover dark:hover:bg-bgDark-popDarker rounded p-2" onClick={() => setOpenReport(true)}>Registrar Tiempo</button>
                  <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Status</p>
                    <p className='w-[40%]'>Status</p>
                  </div>
                  <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Empresas</p>
                    <div className="flex flex-col w-[40%] gap-2">
                      {
                        taskById?.companies?.length > 0 
                        ? taskById?.companies?.map((c:any) => <p key={c.id} className='uppercase'>{c.name}</p>)
                        : <p className="defaultText">No hay empresas</p>
                      }
                    </div>
                  </div>
                  {/* <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Tiempo Invertivo</p>
                    <p className='w-[40%]'>{taskById?.}</p>
                  </div> */}
                  <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Usuario Solicitante</p>
                    <p className='w-[40%]'>{taskById?.reporter?.name}</p>
                  </div>
                  {/* <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Interesados</p>
                    <div className='w-[40%] flex flex-col gap-1'>
                      <p> Area</p>
                      <p> Area</p>
                      <p> Area</p>
                    </div>
                  </div> */}
                  <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Fecha Creacion</p>
                    <p className='w-[40%]'>{taskById?.created}</p>
                  </div>
                  <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Última actualización</p>
                    <p className='w-[40%]'>{taskById?.updated}</p>
                  </div>
                  <div className='flex gap-3 text-sm'>
                    <p className='w-[60%] font-bold'>Fecha finalización</p>
                    <p className='w-[40%]'>{taskById?.finished}</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      }
        </div>
  )
}