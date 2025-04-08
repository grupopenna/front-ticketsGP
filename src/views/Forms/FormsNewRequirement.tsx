import { Autocomplete, TextField } from "@mui/material";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Header from "../../components/Header/Header"

export const FormsNewRequirement = () => {
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
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">Descripción: Detalle de la necesidad o el problema que se desea solucionar</label>
              <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">Objetivos ¿Qué se espera lograr con la solución propuesta?</label>
              <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">¿De donde surge la información? Links / reportes / documentos / excel complementarios y/o relacionados</label>
              <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
              <input type="file" name="" id="" />
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">¿Cuáles son los problemas actuales de proceso que se intenta mejorar? ¿Qué consecuencias conlleva la modalidad de trabajo actual?</label>
              <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">¿Qué espera solucionar con el nuevo desarrollo? ¿Cómo mejora el proceso actual el desarrollo solicitado?</label>
              <textarea 
                id="title"
                name="title"
                placeholder="Sea lo mas descriptivo posible sobre lo que requiere su ticket"
                className="border rounded w-full py-1 px-3 text-lg"
                maxLength={255}
              />
            </div>
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">¿Quiénes usarán el desarrollo o quienes necesitan poder acceder a la información que aporta el desarrollo?</label>
              <Autocomplete
                  options={users}
                  getOptionLabel={(option) => option.fullname}
                  className="w-full"
                  // value={selectedUnit}
                  // onChange={handleUnitChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder='Selecciones usuarios'
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
                          {parts.map((part, index) => (
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
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">¿A qué áreas alcanza el desarrollo?</label>
              <Autocomplete
                  options={users}
                  getOptionLabel={(option) => option.fullname}
                  className="w-full"
                  // value={selectedUnit}
                  // onChange={handleUnitChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder='Selecciones Areas'
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
                          {parts.map((part, index) => (
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
            <div className="flex gap-2 rounded border justify-center items-center px-1.5 py-3 bg-white flex-col shadow-lg">
              <label htmlFor="title" className="text-lg">Roles de usuario ¿Que usuarios interviene?</label>
              <Autocomplete
                options={users}
                getOptionLabel={(option) => option.fullname}
                className="w-full"
                // value={selectedUnit}
                // onChange={handleUnitChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder='Selecciones Roles'
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
                        {parts.map((part, index) => (
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
          </div>
        </div>
        <button className="flex justify-center text-white text-3xl font-bold  px-5 py-2.5 bg-blue-500 rounded-[5px] items-center overflow-hidden">
          <p className="">Solicitar Nuevo Desarrollo</p>
        </button>
      </div>
    </div>
  )
}