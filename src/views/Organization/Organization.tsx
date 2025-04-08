import { useEffect, useState } from 'react';
import { ExpandMoreRounded, ExpandLessRounded, OpenInNewRounded } from '@mui/icons-material';
import Header from "../../components/Header/Header";
import { NavLink } from 'react-router-dom';
import TableSkeleton from '../../components/Skeletons/TableSkeleton';
import { companyStore } from '../../store/companyStore';
import { toast } from 'react-toastify';

export const Organization = () => {
  const [ isLoading, setLoading ] = useState(true);
  const [ reload, setReload ] = useState(true);
  const [ expandedCompany, setExpandedCompany ] = useState(null);
  const { companiesComplete, getCompaniesComplete } = companyStore();

  useEffect(()=> {
    if (reload) {
      getData()
    }
  }, [reload])
  
  const getData = async ()=> {
    try {
      setLoading(true)
      await getCompaniesComplete()
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
      setLoading(false)
    }
  }

  const toggleCompany = (companyId:any) => {
    setExpandedCompany(expandedCompany === companyId ? null : companyId);
  };

  return (
    <div className="h-full mb-32">
      <Header title={'Empresas'} />
      {isLoading 
        ? <TableSkeleton /> 
        : (
          <div className="generalBody">
            <div className="tableHeader">
              <div className="w-[5%]"></div>
              <div className="w-[80%] flex justify-between items-center">
                <p className="w-10">id</p>
                <p className="w-60">Nombre</p>
                <p className="w-60">Responsable</p>
              </div>
              <p className="w-[10%]">Organigrama</p>
            </div>
            <div>
              {companiesComplete?.length > 0 
                ?  companiesComplete.map((c:any) => (
                  <div key={c.company_id}>
                    <div className="flex border-b border-gray-300 dark:border-white/40 py-5 px-5 hover:bg-bgLight-hover dark:hover:bg-bgDark-hover">
                      <div className="w-[5%] cursor-pointer" onClick={() => toggleCompany(c.company_id)}>
                        {expandedCompany === c.company_id ? <ExpandLessRounded fontSize='large' /> : <ExpandMoreRounded fontSize='large' />}
                      </div>
                      <div className="w-[80%] flex justify-between items-center">
                        <p className="w-10">{c.company_id}</p>
                        <p className="w-60">{c.company_name}</p>
                        <p className="w-60">{c.gerente}</p>
                      </div>
                      <p className="w-[10%] hover:underline">Ver Organigrama</p>
                    </div>
                    {expandedCompany === c.company_id && (
                      <div className='flex flex-col py-1 gap-1'>
                        <div className='flex py-1 px-5 text-lg bg-bgLight-sectionBg dark:bg-bgDark-cards rounded'>
                          Áreas
                        </div>
                        {c.areas?.length > 0 ? c.areas.map((a:any) => (
                          <div key={a.area_id} className='flex justify-center items-center py-3 px-5 bg-bgLight-sectionBg dark:bg-bgDark-cards hover:bg-bgLight-cards dark:hover:bg-bgDark-sectionBg'>
                            <div className='w-[85%] flex justify-between items-center'>
                              <NavLink to={`/${a.area_id}/${a.area_shortname}/boards`} className='w-[30%] flex gap-3 items-center hover:underline'>
                                <OpenInNewRounded fontSize='small'/>
                                <p>Ir al tablero</p>
                              </NavLink>
                              <p className='w-[70%] pl-5'>{a.area_name}</p>
                            </div>
                            <p className='w-[15%] hover:underline'>Ver Organigrama</p>
                          </div>
                          ))
                          : <p>No hay Areas para mostrar</p>
                        }
                      </div>
                    )}
                  </div>
                ))
                : <p className='defaultText text-center text-xl'>No hay empresas para mostrar</p>
              }
            </div>
          </div>
        )
      }
    </div>
  );
};