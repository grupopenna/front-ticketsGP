import { clientHttp } from "../client";

export const getAreaBoards = async (idArea: number) => {
  try {
    const response = await clientHttp.get(`boards/all/${idArea}`);

    return response.data.data;
  } catch (error) {
    console.error('Error getAreaBoards from back:', error);
    throw error;
  }
};
export const getTasksBoard = async (id: number) => {
  try {
    const response = await clientHttp.get(`boards/tasks/${id}`);

    return response.data;
  } catch (error) {
    console.error('Error getTasksBoard from back:', error);
    throw error;
  }
};
