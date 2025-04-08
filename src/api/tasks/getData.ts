import { clientHttp } from "../client";

export const getAllTaskUser = async (idUser: number) => {
  try {
      const response = await clientHttp.get(`/tasks/all/${idUser}`);

      return response.data.data;
  } catch (error) {
      console.error('Error getAllTaskUser:', error);
      throw error;
  }
};

export const getTaskById = async (idTask: number) => {
  try {
      const response = await clientHttp.get(`/tasks/${idTask}`);

      return response.data;
  } catch (error) {
      console.error('Error getAllTaskUser:', error);
      throw error;
  }
};