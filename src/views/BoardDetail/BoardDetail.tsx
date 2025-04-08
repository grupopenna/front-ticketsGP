import { useEffect, useState } from 'react';
import HeaderWithButtons from '../../components/Header/HeaderWithButtons';
import { TicketModal } from '../../components/Modal/TicketModal';
import { BoardsSkeleton } from '../../components/Skeletons/BoardsSkeleton';
import { useParams } from 'react-router-dom';
import { boardStore } from '../../store/boardStore';
import { BoardTasks } from '../../components/Boards/BoardTasks';
import { taskStore } from '../../store/taskStore';

const BoardDetail = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fetchData, setFetchData] = useState(true)
  const { id } = useParams();
  const { tasksBoard, getTasksBoardStore } = boardStore()
  const { modalTask } = taskStore()
  
  useEffect(()=> {
    if(fetchData){
      getTasksBoardStore(Number(id))
    }
    setFetchData(false)
    setIsLoading(false)
    },[fetchData])

    console.log('tasksBoard', tasksBoard);

  return (
    <div>
      <div className="flex flex-col gap-5 min-h-screen items-center">
      <HeaderWithButtons title={'Sistemas / Softland'} />
      {/* Tablero Principal */}
      {isLoading 
        ? <BoardsSkeleton/>
        : <div className="w-full overflow-x-auto">
          <div className="flex gap-5 h-[84vh] w-max px-5">
            {tasksBoard.map((task:any) => (
              < BoardTasks task={task}/>
            ))}
          </div>
        </div>
      }
      </div>
      {modalTask != null && (
        <TicketModal/>
      )}
    </div>
  );
};

export default BoardDetail;
