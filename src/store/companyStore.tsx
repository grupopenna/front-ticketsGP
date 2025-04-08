import { create } from "zustand"
import { fetchCompaniesCompleteFromBack } from "../api/companies/getData";

interface CompanyState {
  companiesComplete: any;
  companies: any;
  areas: any;
  getCompaniesComplete: ()=>void;
}

export const companyStore = create<CompanyState>((set) => ({
  companiesComplete: [],
  companies: [],
  areas: [],

  getCompaniesComplete: async () => {
    try {
      const companies = await fetchCompaniesCompleteFromBack();
      if (companies){
        set({ companiesComplete: companies});
      }
    } catch (error:any) {
      set({ companiesComplete: null });
      console.log('companyStore getCompaniesComplete',error);
      
      throw error
    }
  }
}))