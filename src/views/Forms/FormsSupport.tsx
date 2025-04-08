import { Autocomplete, TextField } from "@mui/material";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Header from "../../components/Header/Header"

export const FormsSupport = () => {
  const users = [
    {
      id:1,
      fullname: 'algo'
    }
  ]
  return (
    <div className="">
      <Header title={"Nuevo Ticket - Proyecto "} />
      <div className="w-full flex flex-col gap-5 py-10 px-20">
        <div className="flex-col border-b-2 border-white justify-center items-start text-center">
          <p className="text-black text-3xl font-medium capitalize">Nuevo ticket</p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">Título de la Solicitud: [Título breve y descriptivo de la necesidad]</label>
              <input 
                id="title"
                name="title"
                placeholder="Escriba aqui el titulo"
                type="text"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
            </div>
            <div className="flex  w-full gap-10">
              <div className="flex w-full gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
                <label htmlFor="title" className="text-lg">Tipo de ticket</label>
                <Autocomplete
                    options={users}
                    getOptionLabel={(option) => option.fullname}
                    className="w-full"
                    // value={selectedUnit}
                    // onChange={handleUnitChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder='Seleccione tipo de ticket'
                        margin="normal"
                        className="border-transparent placeholder:font-light"
                        InputProps={{
                          ...params.InputProps,
                          style: { fontWeight: 500, height: 40 },
                        }}
                      />
                    )}
                    renderOption={(props, option, { inputValue }) => {
                      const matches = match(option.fullname, inputValue, { insideWords: true });
                      const parts = parse(option.fullname, matches);
                      return (
                        <li {...props}>
                          <div>
                            {parts.map((part:any, index:any) => (
                              <span
                                key={index}
                                className={part.highlight ? " " : ""}
                              >
                                {part.text}
                              </span>
                            ))}
                          </div>
                        </li>
                      );
                    }}
                  />
              </div>
              <div className="flex w-full gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
                <label htmlFor="title" className="text-lg">Modulo</label>
                <Autocomplete
                  options={users}
                  getOptionLabel={(option) => option.fullname}
                  className="w-full"
                  // value={selectedUnit}
                  // onChange={handleUnitChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder='Seleccione la app/web'
                      margin="normal"
                      className="border-transparent placeholder:font-light"
                      InputProps={{
                        ...params.InputProps,
                        style: { fontWeight: 500, height: 40 },
                      }}
                    />
                  )}
                  renderOption={(props, option, { inputValue }) => {
                    const matches = match(option.fullname, inputValue, { insideWords: true });
                    const parts = parse(option.fullname, matches);
                    return (
                      <li {...props}>
                        <div>
                          {parts.map((part:any, index:any) => (
                            <span
                              key={index}
                              className={part.highlight ? " " : ""}
                            >
                              {part.text}
                            </span>
                          ))}
                        </div>
                      </li>
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">Comentarios Adicionales</label>
              <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">Archivos adjuntos</label>
              {/* <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              /> */}
              <input type="file" name="" id="" />
            </div>
          </div>
        </div>
        <button className="flex justify-center text-white text-3xl font-bold  px-5 py-2.5 bg-blue-500 rounded-[5px] items-center overflow-hidden">
          <p className="">Solicitar Nuevo Desarrollo</p>
        </button>
      </div>
    </div>
  )
}