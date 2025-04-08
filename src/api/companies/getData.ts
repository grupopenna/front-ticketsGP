import { clientHttp } from "../client";

export const fetchCompaniesCompleteFromBack = async () => {
  try {
      const response = await clientHttp.get(`/companies/complete`);
      

      return response.data.data;
  } catch (error) {
      console.error('Error fetchCompaniesCompleteFromBack:', error);
      throw error;
  }
};