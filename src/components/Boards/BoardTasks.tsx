// import { useState } from "react";
// import { TicketModal } from "../Modal/TicketModal";
import { taskStore } from "../../store/taskStore";

interface BoardTasksProps {
  task: any;
}

export const BoardTasks: React.FC<BoardTasksProps> = ({ task })=> {
  // const [openticket, setOpenTicket] = useState<any>(null);
  const { setModatTask } = taskStore()

  return (
    <div
      key={task.colId}
      className="flex flex-col w-[17rem] h-[80vh] p-2 rounded-xl backdrop-blur-xl bg-[#f2f4f7] dark:bg-bgDark-cards shadow-lg cursor-pointer"
    >
      <p className="flex h-[12%] justify-center items-center px-4 mb-4 border-b-2 border-white/50 text-center text-xl font-semibold">
        {task.colname}
      </p>
      {
        task.tasks.length > 0 && task.tasks.map((t:any) => <button
          onClick={() => setModatTask(t.task_id)}
          className="bg-white dark:bg-bgDark-secodCard rounded-lg p-2 drop-shadow-lg shadow-xl"
        >
          <p className="border-b border-white/50 py-2 text-left font-bold">
            {t.task_name}
          </p>
          <div className="flex justify-between py-1">
            <p>{t.task_issueType.task_issueType_name}</p>
            <p>{t.task_key}-{t.task_id}</p>
          </div>
        </button>)
      }
    </div>
  )
}