import { create } from "zustand"
import { getAllTaskUser, getTaskById } from "../api/tasks/getData";

interface TaskState {
  userTasks: any;
  modalTask: number | null;
  taskById: Task | {};
  taskComments: [],
  setModatTask: (idTask: number | null)=> void;
  getAreaTasksStore: (idUser: number)=>void;
  getTasksByIdStore: (idTask: number)=>void;
}

interface TaskObj {
  id: number,
  name: string,
}

interface Task {
  task_id: number;
  task_key:	string;
  title: string;
  descript:	string;
  IssueType: TaskObj;
  reporter: TaskObj;
  task_type: number;
  estimate: number | null;
  column: TaskObj;
  created: string;
  updated: string;
  finished: string;
  asignee: TaskObj[];
  label_id: string;
  label_name: string;
  companies: TaskObj[];
}

export const taskStore = create<TaskState>((set) => ({
  userTasks: [],
  modalTask: null,
  taskById: {},
  taskComments: [],

  setModatTask: (idTask) => {
    set({modalTask: idTask})
  },

  getAreaTasksStore: async (idUser:number) => {
    try {
      const tasks = await getAllTaskUser(idUser);

      if (tasks){
        set({ userTasks: tasks});
      }
    } catch (error:any) {
      set({ userTasks: null });
      console.log('TaskStore getAreaTasksStore',error);

      throw error.response.data;
    }
  },

  getTasksByIdStore: async (idTask:number) => {
    try {
      const response = await getTaskById(idTask);
      console.log(response);
      

      if (response){
        set({ taskById: response.task, taskComments: response.comments });
      }
    } catch (error:any) {
      set({ taskById: {} });
      console.log('TaskStore getAreaTasksStore',error);

      throw error.response.data;
    }
  }
}))