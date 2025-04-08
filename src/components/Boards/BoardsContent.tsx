import { boardStore } from "../../store/boardStore";
import Board from "./Board";

const BoardsContent = () => {
  const { areaBoards } = boardStore()

    return (
        <div className="w-full overflow-x-auto">
          <div className='flex gap-5 h-full w-max pb-4 px-5'>
            { areaBoards.length > 0 
              ? areaBoards.map((b:any) =>  <Board id={b.id} key={b.key} name={b.name} managers={b.users} content={b.descript} navigate={b.key} />)
              : <div className="flex gap-10">
                <p className="defaultText text-lg text-center">No hay tableros para mostrar</p>
                <button className="btnHeader">Crear tablero</button>
              </div>
            }
          </div>
        </div>
    )
}

export default BoardsContent;