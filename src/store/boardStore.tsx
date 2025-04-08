import { create } from "zustand"
import { getAreaBoards, getTasksBoard } from "../api/boards/getData";

interface BoardState {
  areaBoards: any;
  tasksBoard: any;
  companies: any;
  areas: any;
  getAreaBoardsStore: (idArea: number)=>void;
  getTasksBoardStore: (id: number)=>void;
}

export const boardStore = create<BoardState>((set) => ({
  areaBoards: [],
  tasksBoard: [],
  companies: [],
  areas: [],

  getAreaBoardsStore: async (idArea:number) => {
    try {
      const boards = await getAreaBoards(idArea);

      if (boards){
        set({ areaBoards: boards});
      }
    } catch (error:any) {
      set({ areaBoards: null });
      console.log('boardStore getAreaBoardsStore',error);

      throw error;
    }
  },

  getTasksBoardStore: async (id:number) => {
    try {
      const tasks = await getTasksBoard(id);
      if (tasks){
        set({ tasksBoard: tasks});
      }
    } catch (error:any) {
      set({ tasksBoard: null });
      console.log('boardStore getAreaBoardsStore',error);

      throw error;
    }
  }
}))