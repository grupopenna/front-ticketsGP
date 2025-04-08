import { Clear } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { DateTimeField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface ClockReportProps {
  setOpenReport: (value: any) => void;
}

export const ClockReportModal = ({ setOpenReport }: ClockReportProps) => {
  const [time, setTime] = useState(0);
  const [registerTime, setRegisterTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startDate, setStartDate] = useState<any>(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  const handleInitCronometer = () => {
    setIsRunning(true);
    setStartDate(dayjs());
  };
  

  const handleFinishCronometer = () => {
    setIsRunning(false);
    setRegisterTime(time);
    setTime(0);
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="w-full h-full flex justify-center items-center bg-black/50">
        <div className="w-[40%] h-[90%] flex flex-col items-center bg-white dark:bg-bgDark-cards rounded gap-5">
          <div className="w-full border-b flex justify-center">
            <div className="w-[80%] flex justify-between items-center py-4 px-5">
              <h3 className="text-2xl font-bold">Reporte horario</h3>
              <button className="text-red-600 hover:bg-red-600 rounded hover:text-white" onClick={() => setOpenReport(null)}>
                <Clear fontSize="large" />
              </button>
            </div>
          </div>
          {/* Cronómetro */}
          <div className="w-full flex flex-col items-center gap-3">
            <div className="flex w-[80%] justify-between">
              {["Dias", "Horas", "Minutos", "Segundos"].map((label, index) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <p className="bg-bgLight-input text-white flex justify-center dark:bg-bgDark-input py-7 px-5 rounded text-3xl font-bold w-20">
                    {index === 0 ? Math.floor(time / 86400) :
                    index === 1 ? Math.floor((time % 86400) / 3600) :
                    index === 2 ? Math.floor((time % 3600) / 60) :
                    time % 60}
                  </p>
                  <p className="text-base">{label}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-around w-[80%] gap-5">
              {(!isRunning && startDate == null) ?
              <button className="btnOption w-full" onClick={() => handleInitCronometer()}>
                Iniciar
              </button>
              :
              <button className="btnOption w-full" onClick={()=>setIsRunning(!isRunning)}> {isRunning ? 'Pausar' : 'Continuar'}</button>
              }
              <button className="btnOption w-full" onClick={handleFinishCronometer}>Finalizar</button>
            </div>
          </div>
          
          {/* Registro */}
          <div className="flex flex-col w-[80%] items-center gap-5">
            <div className="flex gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label>Tiempo registrado</label>
                <input type="text" className="border bg-transparent rounded px-2 py-1" value={formatTime(registerTime)} readOnly />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label>Fecha de Inicio</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimeField
                    format="DD/MM/YYYY HH:mm"
                    value={startDate}
                    onChange={setStartDate}
                    slotProps={{
                      textField: {
                        size: "small",
                        InputProps: {
                          sx: {
                            border: "1px solid",
                            borderColor: "#7A7A7A",
                            backgroundColor: "#121212",
                            borderRadius: "4px",
                            color: "#ffffff",
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Descripción de lo realizado</label>
              <textarea className="h-28 border bg-transparent rounded px-2 py-1 w-full" placeholder="Describa lo realizado" maxLength={255} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button className="bg-bgLight-base dark:bg-bgDark-popDarker dark:hover:bg-bgDark-hover hover:bg-bgLight-base/50 text-white w-full p-2 font-bold text-lg rounded">
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
