import Header from '../../components/Header/Header';
// import BoardsContent from '../../components/Boards/BoardsContent';
import { useEffect, useState } from 'react';
import { BoardsSkeleton } from '../../components/Skeletons/BoardsSkeleton';
import { useParams } from 'react-router-dom';
import { boardStore } from '../../store/boardStore';
import { toast } from 'react-toastify';
import BoardsContent from '../../components/Boards/BoardsContent';

const Boards = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [ reload, setReload ] = useState(true);

  const { id } = useParams();
  const { getAreaBoardsStore } = boardStore()
  

  useEffect(()=> {
    if(reload){
      getData()
    }
    },[reload])

  const getData = async ()=> {
    try {
      setIsLoading(true)
      await getAreaBoardsStore(Number(id))
    } catch (error: any) {
      toast.error(`Error: ${error.response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    } finally {
      setReload(false)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center gap-5">
      <Header title={'Tableros Área Sistemas'}/>
      {isLoading
        ? <BoardsSkeleton />
        : <BoardsContent />
      }
    </div>
  )
}

export default Boards;